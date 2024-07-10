// src/components/EventList.jsx
import React, { useState } from 'react';
import { format, isSameDay, isSameMonth, parseISO } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Fade } from 'react-awesome-reveal';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

const EventList = ({ events, selectedDate, currentMonth }) => {
  const [showMonthlyEvents, setShowMonthlyEvents] = useState(false);

  const dayEvents = events.filter((event) =>
    isSameDay(parseISO(event.date), selectedDate)
  );

  const monthEvents = events.filter((event) =>
    isSameMonth(parseISO(event.date), currentMonth)
  );

  return (
    <div className="p-4 border border-gray-200 rounded-md w-full h-5/6 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          {showMonthlyEvents
            ? `Events for ${format(currentMonth, 'MMMM yyyy')}`
            : `Events for ${format(selectedDate, 'PPP')}`}
        </h2>
        <div>
          <Button className="mr-5"
            onClick={() => setShowMonthlyEvents(false)}

          >
            Daily
          </Button>
          <Button
            onClick={() => setShowMonthlyEvents(true)}

          >
            Monthly
          </Button>
        </div>
      </div>
      <div className='h-full pb-10 overflow-y-scroll'>
        <Fade direction='right' cascade damping={0.1}>
          {showMonthlyEvents ? (
            monthEvents.length > 0 ? (
              monthEvents.map((event, index) => (
                <Dialog>
                  <DialogTrigger asChild>
                    <div key={index} className="mb-4 p-2  rounded-md">
                      <div className="font-bold">{format(parseISO(event.date), 'PPP')}</div>
                      <div>{event.title}</div>
                      <div>{event.time}</div>
                      <div>{event.description}</div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[825px]">
                    <DialogHeader>
                      <DialogTitle>{event.title}</DialogTitle>
                      <DialogDescription>
                        {format(parseISO(event.date), 'PPP')}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 item-center gap-4 p-8">
                      <div className=" gap-4">
                        <Label className="text-lg">
                          Program Objective
                        </Label>
                        <ul className="list-disc ml-10 mt-5">
                          <li>
                            Understand about safety (Risk, Hazard and
                            regulation)
                          </li>
                          <li>
                            Describe the network structure in an
                            800xA architecture
                          </li>
                          <li>
                            Describe AC 800M hardware component
                          </li>
                          <li>
                            Understand about Variables and Data
                            Type, Programming Language adn also
                            Graphic Displays in AC800 Programming.
                          </li>
                          <li>
                            Able to do troubleshooting with some case
                            example (Problem)
                          </li>
                        </ul>
                      </div>
                      <div className=" gap-4">
                        <Label className="text-lg">
                          Program Content
                        </Label>
                        <ul className="list-disc ml-10 mt-5">
                          <li>
                            Introduction
                          </li>
                          <li>
                            System 800xA Architecture
                          </li>
                          <li>
                            AC 800M Hardware
                          </li>
                          <li>
                            Ac 800 Data Type, Program & Graphic
                            Displays
                          </li>
                          <li>
                            ABB AC 800 Case Example
                          </li>
                        </ul>
                      </div>
                      <div className=" gap-4">
                        <Label className="text-lg">
                          Training Methodology
                        </Label>
                        <ul className="list-disc ml-10 mt-5">
                          <li>
                            Inclass Training
                          </li>

                        </ul>
                      </div>
                      <div className=" gap-4">
                        <Label className="text-lg">
                          Target Participants
                        </Label>
                        <ul className="list-disc ml-10 mt-5">
                          <li>
                            Engineer/Automation Maintanance
                          </li>

                        </ul>
                      </div>
                    </div>
                    <DialogFooter >

                      <DialogClose> <Button type="submit">Close</Button></DialogClose>

                    </DialogFooter>
                  </DialogContent>
                </Dialog>


              ))
            ) : (
              <div>No events for this month</div>
            )
          ) : dayEvents.length > 0 ? (
            dayEvents.map((event, index) => (
              <Dialog>
                <DialogTrigger asChild>
                  <div key={index} className="mb-4 p-2 rounded-md">
                    <div className="font-bold">{event.time}</div>
                    <div>{event.title}</div>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[825px]">
                  <DialogHeader>
                    <DialogTitle>{event.title}</DialogTitle>
                    <DialogDescription>
                      {event.time}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 item-center gap-4 p-8">
                    <div className=" gap-4">
                      <Label className="text-lg">
                        Program Objective
                      </Label>
                      <ul className="list-disc ml-10 mt-5">
                        <li>
                          Understand about safety (Risk, Hazard and
                          regulation)
                        </li>
                        <li>
                          Describe the network structure in an
                          800xA architecture
                        </li>
                        <li>
                          Describe AC 800M hardware component
                        </li>
                        <li>
                          Understand about Variables and Data
                          Type, Programming Language adn also
                          Graphic Displays in AC800 Programming.
                        </li>
                        <li>
                          Able to do troubleshooting with some case
                          example (Problem)
                        </li>
                      </ul>
                    </div>
                    <div className=" gap-4">
                      <Label className="text-lg">
                        Program Content
                      </Label>
                      <ul className="list-disc ml-10 mt-5">
                        <li>
                          Introduction
                        </li>
                        <li>
                          System 800xA Architecture
                        </li>
                        <li>
                          AC 800M Hardware
                        </li>
                        <li>
                          Ac 800 Data Type, Program & Graphic
                          Displays
                        </li>
                        <li>
                          ABB AC 800 Case Example
                        </li>
                      </ul>
                    </div>
                    <div className=" gap-4">
                      <Label className="text-lg">
                        Training Methodology
                      </Label>
                      <ul className="list-disc ml-10 mt-5">
                        <li>
                          Inclass Training
                        </li>

                      </ul>
                    </div>
                    <div className=" gap-4">
                      <Label className="text-lg">
                        Target Participants
                      </Label>
                      <ul className="list-disc ml-10 mt-5">
                        <li>
                          Engineer/Automation Maintanance
                        </li>

                      </ul>
                    </div>
                  </div>
                  <DialogFooter >

                    <DialogClose> <Button type="submit">Close</Button></DialogClose>

                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))
          ) : (
            <div>No events for this day</div>
          )}
        </Fade>
      </div>
    </div>
  );
};

export default EventList;
