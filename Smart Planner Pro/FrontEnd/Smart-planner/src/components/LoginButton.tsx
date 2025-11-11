
import { Button } from "./ui/button"
import type { IconType } from "react-icons"
type ButtonProps={
    name:string,
    icon:IconType
    color:string
}

export default function LoginButton({name,icon:Icon,color}:ButtonProps) {
    
  return (
    <Button variant="outline" className="flex items-center gap-2 justify-center w-full">
        <Icon className={`h-5 w-5 text-${color}`} />
        {name}
    </Button>
  )
}
