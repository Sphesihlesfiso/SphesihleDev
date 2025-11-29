
import express from "express";
import pg from "pg";
import multer from "multer"
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";
import bcrypt  from "bcrypt"
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
env.config();
//certifiactes for the https protocol

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
//uploads folder is where the pictures will be stored.
app.use('/uploads', express.static('public/uploads'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

const saltRounds = 10;

//using session for server side rendering no jwt.
app.use(
  session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    cookie:{ secure:false,
      maxAge:1000*60*60*24*5
    }
  })
);


app.use(passport.initialize());
app.use(passport.session());
//configurating the Postgress Db
const dataBase = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" 
    ? { rejectUnauthorized: false } 
    : false
});

dataBase.connect();

//Getting the bags from db using a promise for synchronization.
function fetchBagsFromdataBase() {

  return new Promise((resolve, reject) => {
    dataBase.query("SELECT * FROM pictures", (err, res) => {
      if (err) {
        console.error("Error executing query", err.stack);
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
}

app.get("/", async (req, res) => {
  try {

    // Fetch all bags (available products)
    const cars = await fetchBagsFromdataBase();

    let bagsIncart = [];

    if (req.user) {

      const orders_result = await dataBase.query(
        "SELECT * FROM orders WHERE orders.user_id=$1",
        [req.user.id]
      );
      bagsIncart = orders_result.rows.map(row => row.bag_id);
    }
    // Render page with either cart items or empty cart
    res.render("home", { cars, bagsIncart });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading products");
  }
});
app.get("/auth/google", 
  passport.authenticate("google", { scope: ["profile", "email"] })
  
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => res.redirect("/account")
);

//using the multer module to upload the pictures
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post("/account/admin", upload.single("image"), (req, res) => {
  const { name, price, available_bags } = req.body;
  const image = req.file;
  console.log(`THESE ARE THE IMAGES ATTRIBUTES ${image}`)
  
  

  //puting the pictures details into the db.
  const query = `
    INSERT INTO pictures (name,price,image,available_bags)
    VALUES ($1, $2, $3, $4)
  `;
  const values = [name, price,image,available_bags];

  dataBase.query(query, values, (err) => {
    if (err) {
      console.error("Upload error:", err.stack);
      res.status(500).send("Upload failed");
    } else {
      res.redirect("/");
    }
  });
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/account", (req, res) => {
  if (req.isAuthenticated()) {
    //Will render admin or normal use page depending on user id
    if (req.user.id === 1) {
      res.redirect("/account/admin")
    } else {
      res.render("account");
    }
  } else {
    return res.redirect("/login");
  }
});


app.post("/login",
  passport.authenticate("local", {
    successRedirect: "/account" ,
    failureRedirect: "/login",
  })
);
//validating and registering user if does not exist in the db.
app.post("/register", async (req, res) => {
  
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await dataBase.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
      //checking if the person does not already have an account
    if (checkResult.rows.length > 0) {
      
      res.redirect("/login");
    } else {
      //Hashing , salting and storing the passoword 10.
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          const result = await dataBase.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {

            res.redirect("/account");
          });
        }
      });
    }
  } catch (err) {
  }
});
//using the passport for login and out 
//Must add login with google and apple
passport.use("local",
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await dataBase.query("SELECT * FROM users WHERE email = $1 ", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            //Error with password check
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
              //Passed password check
              return cb(null, user);
            } else {
              //Did not pass password check
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
    }
  })
);
passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.SERVER_URL + "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
        // profile contains user info from Google
        let newUser;
        try {
          
 
        const result =await dataBase.query("SELECT * FROM users WHERE email=$1",[profile.emails[0].value])
        if (result.rows.length ===0){
          newUser =await dataBase.query("INSERT INTO users (email,password) VALUES ($1,$2)",[profile.emails[0].value,"google"])
          cb(null,newUser.rows[0])

        }else{
          cb(null,result.rows[0])
        }
        } catch (error) {
          cb(error)
        }
      }
    )
)

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});


app.get("/checkout", async(req, res) => {
  try {
      const user = req.user;
      const result = await dataBase.query(`
      SELECT pictures.*
      FROM pictures
      JOIN orders ON pictures.bag_id = orders.bag_id  AND orders.user_id =$1
    `,[user.id]);
       
      const paymentData = {
      merchant_id: "10000100",
      merchant_key: "46f0cd694581a",
      amount: result.rows.reduce((sum, car) => sum + car.price, 500), // R50
      item_name: "Test Product",
      };

  const queryString = Object.keys(paymentData)
    .map(key => `${key}=${encodeURIComponent(paymentData[key])}`)
    .join("&");

  // Redirect user to PayFast sandbox
  const PAYFAST_URL="https://sandbox.payfast.co.za/eng/process"

  res.redirect(`${PAYFAST_URL}?${queryString}`);
    } catch (error) {
      console.error("Error",error)
    }
  
});

app.delete("/removeFromCart",async (req,res)=>{
  const {bag_id}=req.body;
  await dataBase.query(`DELETE FROM orders WHERE bag_id=$1`,[bag_id]);
   res.status(200).json({ message: "Item removed" });
})
//Adding the bags into the database in one table.
app.post("/addBag", async (req, res) => {
  
  try {
    const { bag_id } = req.body;
    const user = req.user;
    const result = await dataBase.query(
      "INSERT INTO orders (bag_id,user_id) VALUES ($1,$2)  RETURNING *",
      [bag_id,user.id]
    );

    res.status(201).json({ order: result.rows[0] });
  } catch (err) {
    console.error("Insert failed:", err);
    res.status(500).json({ error: "Query failed" });
  }
});

app.get('/account/admin',async (req, res) => {
    res.render('admin');

});

app.get('/about',async (req, res) => {
  res.render('about');
});

app.get('/login', (req, res) => {
    if (!req.isAuthenticated()){
      res.render("login")
    } else {
      res.render("account")
    }
    
});

app.get('/register', (req, res) => {
  res.render('register');
});
//Getting the bags for each specific user

app.get('/cart',async (req, res) => {
  if (req.isAuthenticated()){ 
    try {
      const user = req.user;
      const result = await dataBase.query(`
      SELECT pictures.*
      FROM pictures
      JOIN orders ON pictures.bag_id = orders.bag_id  AND orders.user_id =$1
    `,[user.id]);
       res.render("cart",{bagsIncart:result.rows});
    } catch (error) {
      console.error("Error",error)
    }
   
  } else {
    res.redirect("/login");}
});

app.post('/register', (req, res) => {
  res.render('register');
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});