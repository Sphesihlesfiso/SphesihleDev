import type { IconType } from "react-icons"
type CardProps ={
    icon:IconType,
    title:string,
    description:string
}
export default function ServiceCard({icon,title,description}:CardProps) {
    const Icon=icon
  return (
    <div className="border-border rouded-lg bg-card transition-all duration-300 hover:border-color shadow-card">
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="w-12 h-12 rounded-lg card flex justify-center items-center mb-4">
           <Icon size={24} color="primary" />
        </div >
        <div className="px-6 pb-6">
            <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>

    </div>
  )
}
