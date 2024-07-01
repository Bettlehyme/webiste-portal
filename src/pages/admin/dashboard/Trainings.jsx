
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
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
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";
import { CalendarIcon, Eye, ListFilter, Plus, Trash } from "lucide-react";

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Calendar from "@/pages/component/Calendar";
import EventList from "@/pages/component/EventList";
import { addMonths, subMonths, format } from 'date-fns';
import { MultipleSelector } from "@/components/ui/multiple-selector";

import { Check, ChevronsUpDown, Calendar as CalendarIco } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import DatePicker from "@/pages/component/DatePicker";

export default function Trainings() {
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [open, setOpen] = React.useState(false)
    const [valueTraining, setValueTraining] = React.useState("")






    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const events = [
        { date: '2024-06-24T07:00:00', time: '07:00', title: 'GA Weekly Meeting' },
        { date: '2024-06-25T09:00:00', time: '09:00', title: 'Pak Jimmy Meeting' },
        // Add more events here...
    ];

    const OPTIONS = [
        { label: 'Engineer', value: 'engineer' },
        { label: 'Automation Maintannce', value: 'automation maintannce' },


    ];

    const trainings = [
        {
            value: "next.js",
            label: "Next.js",
        },
        {
            value: "sveltekit",
            label: "SvelteKit",
        },

    ]

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
            <div className="flex items-center ">
                <h1 className="text-lg font-semibold md:text-2xl">Trainings</h1>
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7 flex flex-row justify-between">
                        <div>
                            <CardTitle>Training Programs</CardTitle>
                            <CardDescription>

                            </CardDescription>

                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button ><Plus /></Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[1025px]">
                                <DialogHeader>
                                    <DialogTitle>Add Training</DialogTitle>
                                    <DialogDescription>
                                        Add training for upcoming events
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-2">
                                        <Label htmlFor="name" className="text-right">
                                            Course Title
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-2">
                                        <Label htmlFor="username" className="text-right">
                                            Content
                                        </Label>
                                        <ReactQuill className="col-span-3 h-56" theme="snow" value={content} onChange={setContent} />;
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-2">
                                        <Label htmlFor="username" className="text-right" >
                                            Section
                                        </Label>
                                        <div className="flex flex-col items-center my-2 col-span-3 ">
                                            <MultipleSelector
                                                className="col-span-3"
                                                defaultOptions={OPTIONS}
                                                placeholder="Select Section Participant..."
                                                emptyIndicator={
                                                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                                        no results found.
                                                    </p>
                                                }
                                            />

                                        </div>
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-2">
                                        <Label htmlFor="name" className="text-right">
                                            Target Participation
                                        </Label>
                                        <div className="flex flex-col items-center  col-span-3 ">
                                            <MultipleSelector
                                                className="col-span-3"
                                                defaultOptions={OPTIONS}
                                                placeholder="Select Target Participant..."
                                                emptyIndicator={
                                                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                                        no results found.
                                                    </p>
                                                }
                                            />
                                        </div>
                                    </div>

                                </div>
                                <DialogFooter>
                                    <Button type="submit" >Add</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Course Title</TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Section
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Target Participant
                                    </TableHead>
                                    
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="bg-accent">
                                    <TableCell>
                                        <div className="font-medium">DCS ABB AC800 System</div>

                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                    Technical Maintanance
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                    Engineer/Automation Maintannace
                                    </TableCell>
                                   
                                    <TableCell className="text-right">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="none"><Trash width={18} /></Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>Delete</DialogTitle>
                                                    <DialogDescription>
                                                        Are you sure, you want to delete this post?
                                                    </DialogDescription>
                                                </DialogHeader>

                                                <DialogFooter >

                                                    <DialogClose> <Button type="submit">Cancel</Button></DialogClose>
                                                    <Button variant="destructive" type="submit">Delete</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                       </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                        <Pagination className="mt-4">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" >
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7 flex flex-row justify-between">
                        <div>
                            <CardTitle>Calendar</CardTitle>
                            <CardDescription>

                            </CardDescription>

                        </div>


                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col">
                            <Label className="mb-5">Add Event</Label>
                            <div className="flex gap-5">
                                <Input
                                    id="name"
                                    placeholder="Event Title"
                                    className="w-[280px]"
                                />



                                <DatePicker />
                                <Button className="w-[100px]">Add</Button>

                            </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid grid-row-2  gap-4">
                            <div className="flex items-center">

                                <div className="w-full flex  gap-2 ">

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


                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}