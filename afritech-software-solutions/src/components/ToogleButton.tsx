import { AiOutlineSun } from 'react-icons/ai';
import { TbMoonFilled } from 'react-icons/tb';
type ToogleButtonProps= {
    isOn:boolean;
    setIson:(value:boolean)=>void
}
export const  ToogleButton=({isOn,setIson}:ToogleButtonProps)=> {
    
  return (
    <button onClick={()=> setIson(!isOn)}>
        {isOn?<AiOutlineSun/>:<TbMoonFilled/>}
    </button>
  )
}
