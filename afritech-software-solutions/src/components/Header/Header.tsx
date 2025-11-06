import { ToogleButton } from "../ToogleButton"
type HeaderTooglers={
  dark:boolean;
  setDark:(value:boolean)=>void
}
export const Header = ({dark,setDark}:HeaderTooglers) => {
  //Must add section Key and id for Scrolling!
  const HeaderSections=[{section:"Home"}, {section:"About"} ,{section:"Services"},{section:"Contact Us"}
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b  border-border  backdrop-blur-sm">
      <nav className="h-16 flex items-center justify-between px-4 w-7xl m-0">
        <h1 className="text-3xl font-bold items-center bg-gradient-primary-secondary bg-clip-text text-transparent" >Afritech</h1>
          <ul className="list-none font-medium flex flex-row gap-4 " role="list">
            {HeaderSections.map((item,index)=>(
              <li key={index} className="text-md font-medium bg-clip-text cursor-pointer text-white hover:bg-gradient-primary-secondary transition duration-300" role="listitem">
              {item.section}
            </li>))
            }
            <ToogleButton isOn={dark} setIson={setDark} />
          </ul>

      </nav>
    </header>
  )
}

