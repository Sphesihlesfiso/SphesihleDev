import type { IconType } from "react-icons"
type CardProps ={
    icon:IconType,
    title:string,
    description:string
}
export default function ServiceCard({icon,title,description}:CardProps) {
    const Icon=icon
  return (
    <div className="border-2 border-border rounded-lg bg-card shadow-card transition-transform duration-300 hover:-translate-y-2 hover:shadow-hover">
        <div className="w-12 h-12 rounded-xl card  flex justify-center items-center mb-0 bg-card ml-6 mt-4">
           <Icon size={24} color="primary" />
        </div >
        <h1 className="text-xl p-6 pb-0 font-semibold ">{title}</h1>
        <div className="px-6 pb-6">
            <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>

    </div>
  )
}
