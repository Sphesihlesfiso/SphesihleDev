import Task from "@/components/Task"
import { Tasks } from "@/components/TasksArray"

export function Home() {
  const today=new Date();
  const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  ]
  const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
]


  const dayName = days[today.getDay()]
  return (
    <div className="bg-background p-6">
      <div>
        <h1>
          Todays's Schedule
        </h1>
        <p>
          {dayName}, {today.getDate()}, {months[today.getMonth()]},{today.getFullYear()}
        </p>
      </div>
      {Tasks.map((task, index) => (
        <Task
          key={index}
          taskTitle={task.taskTitle}
          description={task.description}
          time={task.time}
          location={task.location}
          synchronised={task.synchronised}
          priority={task.priority}
          weather={task.weather}
        />
      ))}
    </div>
  )
}
