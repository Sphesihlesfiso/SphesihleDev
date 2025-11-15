
import { Clock,Thermometer } from "lucide-react"
export default function Task() {
  return (
    <div className="gird grid-rows-4 gap-4 p-5 my-4 space-y-2 rounded-md bg-card mx-2  border-l-4  border-red-600">
        <div className="flex flex-row justify-between">
            <h1 className="font-bold text-accent-foreground">Team Meeting</h1>
            <h6 className="bg-red-600 rounded-lg p-0.5">high</h6>
        </div>
        <p className="font-semibold">
            Weekly Meeting with the ceo
        </p>
        <div className="flex flex-row justify-between font-bold">
                <div className="font-bold">10:00-11:00</div>
                <div>Remote</div>
                <div className="flex flex-row font-bold">
                    <Thermometer/>
                    <p>24 Sunny</p>

                </div>
                
            </div>
        <div className="text-green-500">
            Synced to Google Calendar
        </div>
    </div>
  )
}
