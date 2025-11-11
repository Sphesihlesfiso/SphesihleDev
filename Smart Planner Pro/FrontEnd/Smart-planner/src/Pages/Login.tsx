import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle,CardFooter } from "@/components/ui/card"
import { FaGoogle, FaInstagram, FaApple,FaGithub } from "react-icons/fa";

import LoginButton from "@/components/LoginButton";


import InputField from "@/components/inputField";
export default function Login() {
  const formItems = [
    {
      name: "Email",
      inputLabelName: "email",
      inputId: "email",
      inputType: "email",
      inputPlaceHolder: "eg: sphesihlemabaso25@gmail.com",
    },
    {
      name: "Name",
      inputLabelName: "name",
      inputId: "name",
      inputType: "text",
      inputPlaceHolder: "Enter your name",
    },
    {
      name: "FullName",
      inputLabelName: "full name",
      inputId: "fullName",
      inputType: "text",
      inputPlaceHolder: "Sphe Mabaso",
    },
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

  const [signUp, setSignUp] = useState(true);

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
            <InputField key={index} item={item} />
          ))}
        </CardContent>

        <CardFooter className="flex flex-col justify-center">
          <button
            className="w-full mb-1"
            >
                Sign In
            </button>
            <h4 className="mb-2">Don't have an account?<a onClick={() => setSignUp((prev) => !prev)}>Sign up</a> </h4>
            <hr className="h-1 bg-foreground"/>
            
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


