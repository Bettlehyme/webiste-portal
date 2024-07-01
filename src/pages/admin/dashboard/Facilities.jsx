
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
import { Eye, Image, Plus, Trash } from "lucide-react";

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';





export default function Facilities() {
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
                <h1 className="text-lg font-semibold md:text-2xl">Facilities</h1>
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7 flex flex-row justify-between">
                        <div>
                            <CardTitle>All Facilities</CardTitle>
                            <CardDescription>

                            </CardDescription>

                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button ><Plus /></Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[1025px]">
                                <DialogHeader>
                                    <DialogTitle>Add Facility</DialogTitle>
                                    <DialogDescription>
                                        Add facility to the website
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
                                        <Label htmlFor="username" className="text-right">
                                            Description
                                        </Label>
                                        <ReactQuill className="col-span-3 h-56" theme="snow" value={content} onChange={setContent} />;
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-2">
                                        <Label htmlFor="username" className="text-right" >
                                            Image
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
                                    <Button type="submit">Add Facilities</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>


                                    <TableHead className="hidden md:table-cell">
                                        Description
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Image
                                    </TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="bg-accent">
                                    <TableCell>
                                        <div className="font-medium">Ali Building (Pangkalan Kerinci)</div>

                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <div className="w-[400px]">

                                            Building description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>

                                    </TableCell>

                                    <TableCell className="hidden md:table-cell">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="none"><Image width={18} /></Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[925px]">
                                                <img src="../home-img1.jpg" className="rounded-xl" />
                                            </DialogContent>
                                        </Dialog>
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
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="none"><Eye width={18} /></Button>
                                            </DialogTrigger>

                                            <DialogContent className=" sm:max-w-[925px] p-0">
                                                <DialogHeader className="bg-[url('/home-img1.jpg')] bg-cover h-56 overflow-hidden rounded-lg ">
                                                    <img src="/home-img1.jpg" className="object-cover w-full hover transition ease-in-out hover:scale-105" />
                                                </DialogHeader>
                                                <div className="grid grid-cols-2 item-center gap-4 p-8 overflow-y-scroll scroll-smooth h-full max-h-72">
                                                    <div className="flex justify-center text-3xl font-semibold col-span-2 ">Ali Building (Pangkalan Kerinci)</div>
                                                    <div className="flex direction-cols gap-5 justify-center col-span-2 text-center">
                                                        Building description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                                    </div>
                                                    <div className="flex justify-center col-span-2  text-justify ">
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button ><Plus /></Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[1025px]">
                                                                <DialogHeader>
                                                                    <DialogTitle>Add Sub Content</DialogTitle>
                                                                    <DialogDescription>
                                                                        add a sub content on this facility
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
                                                                        <Label htmlFor="username" className="text-right">
                                                                            Description
                                                                        </Label>
                                                                        <ReactQuill className="col-span-3 h-56" theme="snow" value={content} onChange={setContent} />;
                                                                    </div>
                                                                    <div className="grid grid-cols-4 items-center gap-2">
                                                                        <Label htmlFor="username" className="text-right" >
                                                                            Image
                                                                        </Label>
                                                                        <div className="flex flex-col items-center my-2 col-span-3 ">
                                                                            <Input
                                                                                type="file"
                                                                                accept="image/*"

                                                                                onChange={handleImageChange}
                                                                                className=" border border-gray-300 rounded-md p-2 shadow-sm"
                                                                                multiple
                                                                            />

                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <DialogFooter>
                                                                    <Button type="submit">Add Facilities</Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>



                                                </div>

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