import { useState } from "react"
import { Card, CardHeader, CardTitle } from "./ui/card"
type LoginRegisterCardProps= {
    cardName:string,

}

export default function LoginRegisterCard({cardName}:LoginRegisterCardProps) {
    const [signUp,setsignUp]=useState(false);
    
    

  return (
    <section className="w-full flex justify-center">
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>
                    {
                        signUp?"Get Started":"Welcome Back"
                    }
                </CardTitle>
            </CardHeader>
        </Card>
    </section>
  )
}
