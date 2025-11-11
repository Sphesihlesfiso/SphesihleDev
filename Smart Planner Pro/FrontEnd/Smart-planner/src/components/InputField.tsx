import { Input } from "./ui/input"
import { Label } from "./ui/label"
type inputItem = {
    name:string,
    inputLabelName:string,
    inputId:string,
    inputType:string,
    inputPlaceHolder:string,
}
type inputProps ={
    item:inputItem,
}
export default function InputField({item}:inputProps) {

  return (
    <div className="flex flex-col my-2" >
        <Label htmlFor={item.inputLabelName}>{item.name}</Label>
        <Input className="my-1" id={item.inputId}
                type={item.inputType}
                placeholder={item.inputPlaceHolder}
                required
        />
        
    </div>
  )
}
