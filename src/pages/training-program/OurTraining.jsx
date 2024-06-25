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


export default function OurTraining() {

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
                        <CardTitle>Our Training Programs</CardTitle>
                    </CardHeader>
                    <CardContent className="w-full items-start gap-4 md:gap-8 ">



                        <div className="flex items-center">

                            <div className="w-full flex items-center gap-2 mb-4">

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-7 gap-1 text-sm"
                                        >
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only">Perticipant</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Participant</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            All
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Engineer
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Automation Maintannace
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Officer
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Supervisor
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Asisten Manager Above
                                        </DropdownMenuCheckboxItem>

                                    </DropdownMenuContent>
                                </DropdownMenu>
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

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-7 gap-1 text-sm"
                                        >
                                            <ListFilter className="h-3.5 w-3.5" />
                                            <span className="sr-only sm:not-sr-only">Filter</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuCheckboxItem checked>
                                            Fulfilled
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Declined
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem>
                                            Refunded
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <div className="relative ml-auto flex-1 md:grow-0">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search..."
                                        className="w-full  rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                                    />
                                </div>

                            </div>
                        </div>

                        <Card x-chunk="dashboard-05-chunk-3">
                           
                            
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>NO</TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Course Title
                                            </TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Section
                                            </TableHead>
                                            <TableHead className="hidden md:table-cell">
                                                Target Participation
                                            </TableHead>
                                            <TableHead className="text-right">Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow className="bg-accent">
                                            <TableCell className="font-medium">
                                                1
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                DCS ABB AC800 System
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">

                                                Technical Maintanance

                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <ul className="list-disc">
                                                    <li>Engineer/Automation Maintannace</li>
                                                </ul>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="outline">Detail</Button>
                                                    </DialogTrigger>
                                                    <DialogContent className=" sm:max-w-[925px]">
                                                        <DialogHeader>
                                                            <DialogTitle className="flex justify-center text-xl">DCS ABB AC800 System</DialogTitle>
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
                                                        <DialogFooter className="flex sm:justify-center">
                                                            <DialogClose asChild>
                                                                <Button >Close</Button>
                                                                </DialogClose>


                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>
                                            </TableCell>
                                        </TableRow>
                                        
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>


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
            </div>
        </>
    )
}