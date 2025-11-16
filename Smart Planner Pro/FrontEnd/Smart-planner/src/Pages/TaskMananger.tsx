import { ListPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tasks } from "@/components/TasksArray"
import Task from "@/components/Task"
export default function TaskMananger() {
  return (
    <>
    <div className="flex flex-row justify-between p-6">
        <div>
            <h1>
                Task's
            </h1>
            <h3>
                Manage all your tasks
            </h3>
        </div>
        <div className="flex flex-row">
            <Button>{<ListPlus/>} New Task</Button>
        </div>

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
    </>
  )
}
