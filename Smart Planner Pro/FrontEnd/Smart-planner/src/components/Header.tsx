import { PanelLeft,Sun,Moon,Bell,LogOut,PersonStanding } from "lucide-react"
export default function Header() {
  return (
     <header className="sticky top-0">
        <div>
            <div>
                <PanelLeft/>
            </div>
            <div>
                <ul>
                    <li>
                        <Moon/>
                    </li>
                    <li>
                        <Bell/>
                    </li>
                    <li>
                        <PersonStanding/>
                    </li>
                </ul>
            </div>
        </div>

     </header>
  )
}
