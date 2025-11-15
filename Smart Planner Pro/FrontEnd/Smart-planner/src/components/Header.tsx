import { PanelLeft,Moon,Bell,User } from "lucide-react"

export default function Header() {
  return (

    <header className="sticky top-0  border-b  w-[1350px] bg-white">
      <div className="flex flex-row items-center justify-between p-2">
        
        {/* Left side: PanelLeft */}
        <div>
          <button className="rounded-xl  p-2 hover:bg-amber-500">
            <PanelLeft />
          </button>
        </div>

        {/* Right side: Moon, Bell, User */}
        <ul className="flex flex-row gap-2">
          <li className="rounded-full bg-accent p-2 hover:bg-amber-500">
            <Moon />
          </li>
          <li className="rounded-full bg-accent p-2 hover:bg-amber-500">
            <Bell />
          </li>
          <li className="rounded-full bg-accent p-2 hover:bg-amber-500">
            <User />
          </li>
        </ul>
      </div>
    </header>
  
  )
}
