import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle,CardFooter } from "@/components/ui/card"
import { FaGoogle, FaInstagram, FaApple,FaGithub } from "react-icons/fa";

import LoginButton from "@/components/LoginButton";


import InputField from "@/components/InputField";
export default function Login() {
  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formItems = [
    {
      name: "Email",
      inputLabelName: "email",
      inputId: "email",
      inputType: "email",
      inputPlaceHolder: "eg: sphesihlemabaso25@gmail.com",
    },
    {
    "name": "Password",
    "inputLabelName": "password",
    "inputId": "password",
    "inputType": "password",
    "inputPlaceHolder": "Enter your password"
    }

    
  ];
  const LoginButtons=[
    {
        name:"Google",
        icon:FaGoogle,
        color:"blue-600"
    },
    {
        name:"Apple",
        icon:FaApple,
        color:"black"
    },
    {
        name:"Instagram",
        icon:FaInstagram,
        color:"#E1306C"
    },
    {
        name:"GitHub",
        icon:FaGithub,
        color:"gray-800"
    }
  ]
  const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();

      const res = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password 
        }),
      });

  const data = await res.json();
  console.log(data);
};


 
  {
    if (!signUp) {
        formItems[0]={
            name: "Full Name",
            inputLabelName: "name",
            inputId: "name",
            inputType: "text",
            inputPlaceHolder: "eg:Sphesihle Mabaso",
        };
        formItems[1]={
            name: "Email",
            inputLabelName: "email",
            inputId: "email",
            inputType: "email",
            inputPlaceHolder: "eg: sphesihlemabaso25@gmail.com",
          };
        formItems[2]={
          name: "Password",
          inputLabelName: "password",
          inputId: "password",
          inputType: "password",
          inputPlaceHolder: "Enter your password"
          }
            
        }}
  return (
    <section
      aria-label="Login or register"
      className="flex justify-center items-center min-h-screen bg-background"
    >
      <Card className="w-full max-w-md p-6 shadow-lg border border-border rounded-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-semibold text-center">
            {signUp ? "Welcome Back" : "Get Started"}
          </CardTitle>
          <CardDescription className="text-center">
            {signUp
              ? "Sign in to your Smart Planner account"
              : "Create your Smart Planner account"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2 mb-0">

         

          {formItems.map((item, index) => (
            <InputField
                key={index}
                item={item}
                value={item.inputId === "email" ? email : password}
                onChange={(e) =>
                  item.inputId === "email" ? setEmail(e.target.value) : setPassword(e.target.value)
                }
              />

          ))}
        </CardContent>

        <CardFooter className="flex flex-col justify-center">
          <form>
          <button onSubmit={handleLogin}
            className="w-full mb-1" type="submit"
            >
               { !signUp?"Sign Up":"Sign In"}
            </button>
          </form>
            <h4 className="mb-2">{!signUp?"Already have an account?":"Don't have an account "}<a onClick={() => setSignUp((prev) => !prev)}> { signUp?"Sign Up":"Sign In"}</a> </h4>
            <hr className="border-0 h-0.5 mb-1  bg-black w-full"/>
            <p>Or {signUp?"sign in":"sign up"} with:</p>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {
                 LoginButtons.map((button,index)=> (
                        <LoginButton key={index} name={button.name} icon={button.icon} color={button.color}/>
                    ))}   
            </div>


        

        </CardFooter>
      </Card>
    </section>
  );
}


