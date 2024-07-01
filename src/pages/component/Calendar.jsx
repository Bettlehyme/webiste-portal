// src/components/Calendar.jsx
import React, { useState } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    isSameMonth,
    isSameDay,
    subMonths,
    addMonths,
  } from 'date-fns';
import { Button } from '@/components/ui/button';

const Calendar = ({ currentMonth, selectedDate, onDateClick, onPrevMonth, onNextMonth }) => {
    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(currentMonth);
  
    const startDate = startOfWeek(startMonth, { weekStartsOn: 1 });
    const endDate = endOfWeek(endMonth, { weekStartsOn: 1 });
  
    const renderDay = (date) => {
      const isSelected = isSameDay(date, selectedDate);
      return (
        <div
          key={date}
          className={`p-2 border border-gray-200 text-center cursor-pointer rounded-md hover:bg-gray-100  hover:text-black${
            isSameMonth(date, currentMonth) ? '' : 'bg-gray-100'
          } ${isSelected ? 'bg-black text-white ' : ''}`}
          onClick={() => onDateClick(date)}
        >
          {format(date, 'd')}
        </div>
      );
    };
  
    const renderDays = () => {
      const days = [];
      let day = startDate;
      while (day <= endDate) {
        days.push(renderDay(day));
        day = addDays(day, 1);
      }
      return days;
    };
  
    const renderHeaders = () => {
      const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      return daysOfWeek.map((day) => (
        <div key={day} className="p-2 border border-gray-200 font-bold text-center">
          {day}
        </div>
      ));
    };
  
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <Button
            onClick={onPrevMonth}
            className=""
          >
            Previous
          </Button>
          <h2 className="text-lg font-bold">{format(currentMonth, 'MMMM yyyy')}</h2>
          <Button
            onClick={onNextMonth}
          
          >
            Next
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {renderHeaders()}
          {renderDays()}
        </div>
      </div>
    );
  };

export default Calendar;