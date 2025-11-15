
import { Clock,Thermometer } from "lucide-react"
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
    <div className="grid grid-rows-4 gap-4 p-5 my-4 space-y-2 rounded-md bg-card mx-2 border-l-4 border-red-600">
      {/* Title + Priority */}
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-accent-foreground">{props.taskTitle}</h1>
        <h6 className="bg-red-600 text-white rounded-lg px-2 py-0.5">
          {props.priority}
        </h6>
      </div>

      {/* Description */}
      <p className="font-semibold">{props.description}</p>

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

