
export const Header = () => {
  //Must add section Ket and id for Scrolling!
  const HeaderSections=[{section:"Home"}, {section:"About"} ,{section:"Services"},{section:"Contact Us"}

  ]
  return (
    <header className="fixed z-50 border-b  backdrop-blur-lg" style={{ background: "hsl(var(--background) / 0.95)"}}>
      <nav className="h-64 flex items-center justify-between px-4 m-0">
        <ul className="list-none font-medium ">
          {HeaderSections.map((item)=>(
            <li className="bg-amber-400 ">
            {item.section}
          </li>))
          }
        </ul>

      </nav>
    </header>
  )
}

