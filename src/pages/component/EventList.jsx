// src/components/EventList.jsx
import React from 'react';
import { format, isSameDay, parseISO } from 'date-fns';

const EventList = ({ events, selectedDate }) => {
  const dayEvents = events.filter((event) => isSameDay(parseISO(event.date), selectedDate));

  return (
    <div className="p-4 border border-gray-200 rounded-md w-full">
      <h2 className="text-2xl font-bold mb-4">
        Events for {format(selectedDate, 'PPP')}
      </h2>
      {dayEvents.length > 0 ? (
        dayEvents.map((event, index) => (
          <div key={index} className="mb-4 p-2 bg-gray-100 rounded-md">
            <div className="font-bold">{event.time}</div>
            <div>{event.title}</div>
          </div>
        ))
      ) : (
        <div>No events for this day</div>
      )}
    </div>
  );
};

export default EventList;
