import { Button } from "@/components/ui/button"
import {
    ListFilter,
    Search,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Calendar from "../component/Calendar"
import EventList from "../component/EventList"
import { useState } from "react"
import { addMonths, subMonths } from 'date-fns';

export default function TrainingCalendar() {
    const events = [
        { date: '2024-06-24T07:00:00', time: '07:00', title: 'GA Weekly Meeting' },
        { date: '2024-06-25T09:00:00', time: '09:00', title: 'Pak Jimmy Meeting' },
        // Add more events here...
    ];
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => subMonths(prevMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => addMonths(prevMonth, 1));
    };
    return (
        <>
            <Card className="overflow-hidden h-96 ">
                <div className="overflow-hidden h-96 bg-[url('../home-img2.jpg')] bg-cover bg-center overflow-hidden transition ease-in-out hover:scale-105  ">
                    {/* <b className="absolute inset-0">Breif Explenation</b> */}

                </div>
            </Card>
            <div className="grid grid-cols-2 p-10 gap-4">

                <Card className="flex flex-col items-center  col-span-2">
                    <CardHeader>
                        <CardTitle>Training Calendar</CardTitle>
                    </CardHeader>
                    <CardContent className="w-full items-start gap-4 md:gap-8 ">



                        <div className="flex items-center">

                            <div className="w-full flex justify-center gap-2 mb-4">

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-7 gap-1 text-sm"
                                        >
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only">Section</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Section</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            All
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Technical Maintannace
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Leadership & Development
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>



                            </div>
                        </div>

                    
                                <div className="flex flex-col lg:flex-row">
                                    <div className="w-full lg:w-1/2 p-4">
                                        <Calendar
                                            currentMonth={currentMonth}
                                            onDateClick={handleDateClick}
                                            onPrevMonth={handlePrevMonth}
                                            onNextMonth={handleNextMonth}
                                            selectedDate={selectedDate}
                                            
                                        />
                                    </div>
                                    <div className="w-full lg:w-3/4 p-4">
                                        <EventList events={events} selectedDate={selectedDate} />
                                    </div>
                                </div>
                     


                    </CardContent>
                </Card>
            </div>
        </>
    )
}