
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
import { Eye, Plus, Trash } from "lucide-react";

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";





export default function AdminEventsGallery() {
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };
    return (
        <>
            <div className="flex items-center ">
                <h1 className="text-lg font-semibold md:text-2xl">Events Gallery</h1>
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7 flex flex-row justify-between">
                        <div>
                            <CardTitle>Recent Gallery</CardTitle>
                            <CardDescription>

                            </CardDescription>

                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button ><Plus /></Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[1025px]">
                                <DialogHeader>
                                    <DialogTitle>Add Event Gallery</DialogTitle>
                                    <DialogDescription>
                                        add events gallery to people see in the website
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-2">
                                        <Label htmlFor="name" className="text-right">
                                            Title
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                            className="col-span-3"
                                        />
                                    </div>

                                    <div className="grid grid-cols-4 items-center gap-2">
                                        <Label htmlFor="username" className="text-right" >
                                            Images
                                        </Label>
                                        <div className="flex flex-col items-center my-2 col-span-3 ">
                                            <Input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className=" border border-gray-300 rounded-md p-2 shadow-sm"
                                            />
                                            {/* {image && (
                                                <div className="mt-4">
                                                    <img
                                                        src={image}
                                                        alt="Selected"
                                                        className="max-w-xs border border-gray-300 rounded shadow-sm"
                                                    />
                                                </div>
                                            )} */}
                                        </div>
                                    </div>

                                </div>
                                <DialogFooter>
                                    <Button type="submit">Add</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Images
                                    </TableHead>

                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="bg-accent">
                                    <TableCell>
                                        <div className="font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        ...
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
                                                        
                                                    </DialogDescription>
                                                </DialogHeader>

                                                <DialogFooter >

                                                    <DialogClose> <Button type="submit">Cancel</Button></DialogClose>
                                                    <Button variant="destructive" type="submit">Delete</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="none"><Eye width={18} /></Button>
                                            </DialogTrigger>

                                            <DialogContent className=" sm:max-w-[925px] p-0 overflow-hidden">
                                          
                                                <Carousel className="w-full transition ease-in-out overflow-hidden"
                                                            plugins={[
                                                                emblaCarouselAutoplay({
                                                                    delay: 4000,
                                                                }),
                                                            ]}

                                                            opts={{
                                                                align: "start",
                                                                loop: true,
                                                            }}
                                                        >
                                                            <CarouselContent>
                                                                <CarouselItem key="1">
                                                                    <Card className="w-full h-full">
                                                                        <CardContent className="flex items-center justify-center w-full h-full p-0">
                                                                            {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                                                            <img src="/home-img1.jpg" className="object-cover w-full h-full" />
                                                                        </CardContent>
                                                                    </Card>
                                                                </CarouselItem>
                                                                <CarouselItem key="2">
                                                                    <Card className="w-full h-full">
                                                                        <CardContent className="flex items-center justify-center w-full h-full p-0">
                                                                            {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                                                            <img src="/home-img2.jpg" className="object-cover w-full h-full" />
                                                                        </CardContent>
                                                                    </Card>
                                                                </CarouselItem>
                                                            </CarouselContent>
                                                            <CarouselPrevious />
                                                            <CarouselNext />
                                                        </Carousel>

                                            </DialogContent>
                                        </Dialog></TableCell>
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
            </div>
        </>
    );
}