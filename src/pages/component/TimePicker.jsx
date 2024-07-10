import * as React from "react";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 60 }, (_, i) => i);

const TimePicker = () => {
  const [time, setTime] = React.useState({ hour: null, minute: null });
  const formattedTime = time.hour !== null && time.minute !== null 
    ? format(new Date(0, 0, 0, time.hour, time.minute), "HH:mm") 
    : "Pick a time";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="col-span-3 justify-start text-left font-normal">
          <Clock className="mr-2 h-4 w-4" />
          {formattedTime}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 flex flex-col space-y-4">
        <div className="flex space-x-4">
          <div>
            <span className="block mb-2 text-sm font-medium text-gray-700">Hour</span>
            <select 
              className="w-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={time.hour ?? ""}
              onChange={(e) => setTime({ ...time, hour: e.target.value })}
            >
              <option value="" disabled>Select hour</option>
              {hours.map(hour => (
                <option key={hour} value={hour}>{hour.toString().padStart(2, '0')}</option>
              ))}
            </select>
          </div>
          <div>
            <span className="block mb-2 text-sm font-medium text-gray-700">Minute</span>
            <select 
              className="w-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={time.minute ?? ""}
              onChange={(e) => setTime({ ...time, minute: e.target.value })}
            >
              <option value="" disabled>Select minute</option>
              {minutes.map(minute => (
                <option key={minute} value={minute}>{minute.toString().padStart(2, '0')}</option>
              ))}
            </select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TimePicker;
