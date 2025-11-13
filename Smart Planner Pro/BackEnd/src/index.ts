import express from "express"
import { config } from "./config"
import cors from "cors"

const port=config.port;
const app=express();
app.use(cors({
  origin: 'http://localhost:5173', // or 3000
  credentials: true
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Hello Word TSX!")
})
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', email, password);
  res.json({ success: true });
});
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})