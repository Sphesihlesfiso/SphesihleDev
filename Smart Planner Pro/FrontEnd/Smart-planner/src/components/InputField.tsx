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
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputField({ item,value,onChange }: inputProps) {
  return (
    <div className="flex flex-col my-3">
      <Label
        htmlFor={item.inputLabelName}
        className="text-sm font-medium text-foreground/80"
      >
        {item.name}
      </Label>
      <Input
        className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 text-sm focus:ring-2 focus:ring-primary"
        id={item.inputId}
        type={item.inputType}
        placeholder={item.inputPlaceHolder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

