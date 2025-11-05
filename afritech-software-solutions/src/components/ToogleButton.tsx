import { BiSun } from 'react-icons/bi';
import { TbMoon } from 'react-icons/tb';
type ToogleButtonProps= {
    isOn:boolean;
    setIson:(value:boolean)=>void
}
export const  ToogleButton=({isOn,setIson}:ToogleButtonProps)=> {
    
  return (
    <button  className="bg-white rounded-full p-1 hover:text-primary cursor-pointer transition duration-300 " role="button" onClick={()=> setIson(!isOn)}>
        {isOn?<BiSun/>:<TbMoon/>}
    </button>
  )
}
