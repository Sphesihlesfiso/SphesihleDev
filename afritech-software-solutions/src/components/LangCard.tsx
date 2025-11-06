import type {  IconType } from "react-icons"

type LanguageProps ={
  icon:IconType,
  name:string
}
export default function LangCard({icon,name}:LanguageProps) {
  const Icon = icon
  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-lg border-border bg-card transition-all duration-300 hover:shadow-hover" aria-label="card">
      <div className="w-10 h-10 text-primary">
        <Icon  size={40} />
      </div>
      <div className="text-sm font-medium text-center">
        {name}
      </div>
    </div>
  )
}
