

export default function Task() {
  return (
    <div className="gird grid-rows-4 gap-4 p-5 my-4 space-y-2 rounded-md bg-amber-50 mx-2 border-l-4  border-red-700">
        <div className="flex flex-row justify-between">
            <h1>Team Meeting</h1>
            <h6>high</h6>
        </div>
        <p>
            Weekly Meeting with the ceo
        </p>
        <div className="flex flex-row justify-between">
                <div>10:00-11:00</div>
                <div>Remote</div>
                <div>24 Sunny</div>
                
            </div>
        <div>
            Synced to Google Calendar
        </div>
    </div>
  )
}
