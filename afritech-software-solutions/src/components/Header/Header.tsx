import { ToogleButton } from "../ToogleButton"
type HeaderTooglers={
  dark:boolean;
  setDark:(value:boolean)=>void
}
export const Header = ({dark,setDark}:HeaderTooglers) => {
  //Must add section Key and id for Scrolling!
  const HeaderSections=[{section:"Home",index:1}, {section:"About",index:2} ,{section:"Services",index:3},{section:"Contact Us",index:4}
  ]
  return (
    <header className="z-50 flex-row border-b  backdrop-blur-lg  px-6 " style={{ background: "hsl(0 0% 100% / 0.95)"
}}>
      <nav className="flex  flex-row justify-end items-center m-0">
        <h1 className="text-3xl flex-1 font-bold items-center " style={{ color: 'hsl(200, 95%, 35%)',backgroundColor: 'linear-gradient(to right, hsl(200, 95%, 35%), hsl(195, 85%, 50%))' }}>Afritech</h1>
          <ul className="list-none font-medium flex  flex-row  gap-4  ">
            {HeaderSections.map((item)=>(
              <li key={item.index} className=" ml-6 rounded-2xl p-4"  style={{color:"red"}}>
              {item.section}
            </li>))
            }
            <ToogleButton isOn={dark} setIson={setDark}/>
          </ul>

      </nav>
    </header>
  )
}

