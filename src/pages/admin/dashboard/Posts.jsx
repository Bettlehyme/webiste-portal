
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





export default function Posts() {
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
                <h1 className="text-lg font-semibold md:text-2xl">Posts</h1>
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7 flex flex-row justify-between">
                        <div>
                            <CardTitle>Recent Post</CardTitle>
                            <CardDescription>

                            </CardDescription>

                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button ><Plus /></Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[1025px]">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
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
                                            Content
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
                                    <div className="grid grid-cols-4 items-center gap-2">
                                        <Label htmlFor="name" className="text-right">
                                            Author
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="Pedro Duarte"
                                            className="col-span-3"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Post</Button>
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
                                        Author
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Tag
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Date
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Viewed
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
                                        Haikal Alatas
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs bg-lime-300 text-black/50" >
                                            Energy
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        Sabtu, 29 juni 2024
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        1000
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="none"><Trash width={18}/></Button>
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
                                                    <div className="flex justify-center text-3xl font-semibold col-span-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                                    <div className="flex direction-cols gap-5 justify-center col-span-2">
                                                        <div>Haikal Alatas</div>
                                                        <div>Sabtu, 29 juni 2024 </div>
                                                    </div>
                                                    <div className="flex justify-center col-span-2  text-justify ">
                                                        <p className="indent-8 ">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum aliquet elit et sodales. Phasellus a facilisis mi. In pharetra nec eros et bibendum. Etiam sed justo sapien. Curabitur erat lorem, dignissim id scelerisque sed, porta sit amet diam. Ut tempor finibus orci ac luctus. Praesent iaculis quam eu iaculis iaculis. Suspendisse et felis odio. Mauris pulvinar erat libero, eu semper nisl sagittis vitae. Vivamus vestibulum dolor eget nisl ultricies congue. Donec ullamcorper nisl sollicitudin, pharetra elit euismod, pulvinar elit. Proin ac interdum enim, at blandit ligula. Etiam risus justo, elementum finibus tortor et, sagittis fermentum tellus. Quisque vestibulum quis orci nec convallis.

                                                            Vestibulum non elit ac mi aliquet dictum. Vivamus accumsan pharetra est sed rhoncus. Proin sed feugiat justo. Pellentesque a facilisis purus, et ullamcorper nunc. Donec id ligula cursus, malesuada nisi rhoncus, ullamcorper nibh. In iaculis libero id purus elementum, sit amet laoreet massa ultrices. Vivamus efficitur, felis vitae ornare tincidunt, tortor neque tincidunt risus, eget ultricies magna orci malesuada ligula. Praesent commodo nibh eget quam iaculis, eu sagittis sapien convallis. Aenean tempor luctus ultrices. Maecenas eget leo tincidunt, facilisis ipsum id, efficitur arcu. Donec nisl turpis, accumsan et ex vel, imperdiet pulvinar dui. Integer sagittis quam ac arcu faucibus faucibus.

                                                            Donec auctor placerat dolor vel tristique. Vivamus ligula eros, aliquet sit amet lobortis ut, ultricies quis urna. Sed eget lacus accumsan, consequat odio ut, malesuada dolor. Fusce ut diam non dui tristique interdum non feugiat tellus. Aenean sit amet nisl in justo venenatis interdum. Etiam a enim finibus, scelerisque nunc eu, pellentesque tortor. Morbi lacinia leo vel pellentesque fermentum. Etiam nec dui in sapien venenatis laoreet. Sed semper vehicula metus, sed feugiat neque molestie at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in ligula non lectus imperdiet dictum sed id lorem. Aenean sed magna lacus. Maecenas non dolor ut nisl ultrices finibus at in mi. Integer tempus vitae turpis a placerat.
                                                        </p>
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