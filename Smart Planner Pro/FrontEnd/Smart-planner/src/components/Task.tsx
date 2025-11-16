
import { Clock,Thermometer,Trash,SquarePen } from "lucide-react"
type TaskProps ={
    taskTitle: string
    description: string
    time: string
    location: string
    synchronised: boolean
    priority: string
    weather: {
        icon: string
        temp: string
        condition: string

}
}


// Component
export default function Task(props: TaskProps) {
  return (
    <div className={`grid grid-rows-4 gap-4 p-5 my-4 space-y-2 rounded-md bg-card mx-2 border-l-4 ${
            props.priority === "high"
            ? "border-red-600"
            : props.priority == "low"
            ? "border-green-600"
            : "border-yellow-600"
        }`} 
        >
      {/* Title + Priority */}
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-accent-foreground">{props.taskTitle}</h1>
        <div>
        <h6 className="bg-red-600 text-white rounded-lg px-2 py-0.5">
          {props.priority}

        </h6>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-row justify-between">
        <div>
            <p className="font-semibold">{props.description}</p>
        </div>
        <div className="flex gap-6">
            <button ><SquarePen /></button>
            <button onClick={()=>{
                
            }}><Trash/></button>
        </div>
        
        

      </div>
      

      {/* Time, Location, Weather */}
      <div className="flex flex-row justify-between font-bold">
        <div className="flex flex-row items-center gap-1">
          <Clock />
          <p>{props.time}</p>
        </div>

        <div>{props.location}</div>

        <div className="flex flex-row items-center gap-1">
          <Thermometer />
          <span>{props.weather.icon}</span>
          <span>{props.weather.temp}°C</span>
          <span>{props.weather.condition}</span>
        </div>
      </div>

      {/* Sync Status */}
      <div className="flex flex-row gap-1 text-green-500">
        {props.synchronised?
         "Synced to Google Calendar" : "Not synced to Google Calendar"}
      </div>
    </div>
  )
}

