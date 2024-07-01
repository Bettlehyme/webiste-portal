import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";


export default function Home() {

    return (
        <>
            <Card className="overflow-hidden h-96 relative ">
                {/* <div className="overflow-hidden h-96 bg-[url('/home-img1.jpg')] bg-cover bg-center overflow-hidden transition ease-in-out hover:scale-105  ">
                    <b className="absolute inset-0">Breif Explenation</b>

                </div> */}
                <Carousel className="w-full"
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}

                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>

                        <CarouselItem key="1">
                            <div className="">
                                <Card>
                                    <CardContent className="flex items-center justify-center w-full p-0">
                                        {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                        <img src="/home-img1.jpg" className="object-cover w-full" />

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem key="2">
                            <div className="">
                                <Card>
                                    <CardContent className="flex items-center justify-center w-full p-0">
                                        {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                        <img src="/home-img2.jpg" className="object-cover w-full" />

                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </Card>
            <div className="grid grid-cols-4 p-10 ">
                <div className="grid grid-cols-2 gap-4 lg:col-span-3  lg:mr-10 sm:col-span-4 sm:mr-0">

                    <Dialog>
                        <DialogTrigger asChild>
                            <Link to={"#"}>
                                <Card className="h-64 bg-[url('home-img1.jpg')] bg-cover overflow-hidden transition ease-in-out hover:scale-105 " >

                                    <CardHeader className="p-0">
                                        <CardTitle className="h-40 overflow-hidden"></CardTitle>
                                    </CardHeader>
                                    <CardContent className="h-fit backdrop-blur-md bg-black/10 text-white rounded-2xl">
                                        <p className="h-20 text-ellipsis overflow-hidden py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </CardContent>

                                </Card>
                            </Link>
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
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Link to={"#"}>
                                <Card className="h-64 bg-[url('home-img1.jpg')] bg-cover overflow-hidden transition ease-in-out hover:scale-105 " >

                                    <CardHeader className="p-0">
                                        <CardTitle className="h-40 overflow-hidden"></CardTitle>
                                    </CardHeader>
                                    <CardContent className="h-fit backdrop-blur-md bg-black/10 text-white rounded-2xl">
                                        <p className="h-20 text-ellipsis overflow-hidden py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </CardContent>

                                </Card>
                            </Link>
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
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Link to={"#"}>
                                <Card className="h-64 bg-[url('home-img1.jpg')] bg-cover overflow-hidden transition ease-in-out hover:scale-105 " >

                                    <CardHeader className="p-0">
                                        <CardTitle className="h-40 overflow-hidden"></CardTitle>
                                    </CardHeader>
                                    <CardContent className="h-fit backdrop-blur-md bg-black/10 text-white rounded-2xl">
                                        <p className="h-20 text-ellipsis overflow-hidden py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </CardContent>

                                </Card>
                            </Link>
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
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Link to={"#"}>
                                <Card className="h-64 bg-[url('home-img1.jpg')] bg-cover overflow-hidden transition ease-in-out hover:scale-105 " >

                                    <CardHeader className="p-0">
                                        <CardTitle className="h-40 overflow-hidden"></CardTitle>
                                    </CardHeader>
                                    <CardContent className="h-fit backdrop-blur-md bg-black/10 text-white rounded-2xl">
                                        <p className="h-20 text-ellipsis overflow-hidden py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </CardContent>

                                </Card>
                            </Link>
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
                    </Dialog>

                </div>
                <div className="lg:col-end-5 lg:col-span-1 lg:mt-0 gap-4 sm:col-span-4  sm:mt-10">
                    <Card className="h-48 ">
                        <CardHeader>
                            <CardTitle>Download</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ol class="list-disc underline px-2">
                                <li><Link to={"#"}>Company Profile.pdf</Link></li>
                                <li><Link to={"#"}>Guide.pdf</Link></li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:col-span-3  lg:mr-10 sm:col-span-4 sm:mr-0 border-b-2 my-5">

                </div>
                <div className="grid grid-cols-2 gap-4 lg:col-span-3  lg:mr-10 sm:col-span-4 sm:mr-0">
                    <Dialog className="col-span-2">
                        <DialogTrigger asChild>
                            <Link className="h-42 w-full col-span-2  bg-cover overflow-hidden transition ease-in-out hover:scale-105 ">
                                <Card className="border-none" >
                                    <CardContent className="flex  h-full  gap-5 p-0">
                                        <div className="h-full w-1/3 overflow-hidden p-0 rounded-2xl" >
                                            <img src="/home-img1.jpg" className="object-cover w-full h-full p-0 " />
                                        </div>
                                        <div className="w-1/2 flex flex-col gap-2 py-3">
                                            <p className=" text-ellipsis overflow-hidden  text-black text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p className=" text-ellipsis overflow-hidden  text-black ">4 hours ago</p>
                                        </div>

                                    </CardContent>

                                </Card>
                            </Link>
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
                    </Dialog>
                    <Dialog className="col-span-2">
                        <DialogTrigger asChild>
                            <Link className="h-42 w-full col-span-2  bg-cover overflow-hidden transition ease-in-out hover:scale-105 ">
                                <Card className="border-none" >
                                    <CardContent className="flex  h-full  gap-5 p-0">
                                        <div className="h-full w-1/3 overflow-hidden p-0 rounded-2xl" >
                                            <img src="/home-img1.jpg" className="object-cover w-full h-full p-0 " />
                                        </div>
                                        <div className="w-1/2 flex flex-col gap-2 py-3">
                                            <p className=" text-ellipsis overflow-hidden  text-black text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p className=" text-ellipsis overflow-hidden  text-black ">4 hours ago</p>
                                        </div>

                                    </CardContent>

                                </Card>
                            </Link>
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
                    </Dialog>
                    <Dialog className="col-span-2">
                        <DialogTrigger asChild>
                            <Link className="h-42 w-full col-span-2  bg-cover overflow-hidden transition ease-in-out hover:scale-105 ">
                                <Card className="border-none" >
                                    <CardContent className="flex  h-full  gap-5 p-0">
                                        <div className="h-full w-1/3 overflow-hidden p-0 rounded-2xl" >
                                            <img src="/home-img1.jpg" className="object-cover w-full h-full p-0 " />
                                        </div>
                                        <div className="w-1/2 flex flex-col gap-2 py-3">
                                            <p className=" text-ellipsis overflow-hidden  text-black text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p className=" text-ellipsis overflow-hidden  text-black ">4 hours ago</p>
                                        </div>

                                    </CardContent>

                                </Card>
                            </Link>
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
                    </Dialog>
                    <Dialog className="col-span-2">
                        <DialogTrigger asChild>
                            <Link className="h-42 w-full col-span-2  bg-cover overflow-hidden transition ease-in-out hover:scale-105 ">
                                <Card className="border-none" >
                                    <CardContent className="flex  h-full  gap-5 p-0">
                                        <div className="h-full w-1/3 overflow-hidden p-0 rounded-2xl" >
                                            <img src="/home-img1.jpg" className="object-cover w-full h-full p-0 " />
                                        </div>
                                        <div className="w-1/2 flex flex-col gap-2 py-3">
                                            <p className=" text-ellipsis overflow-hidden  text-black text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p className=" text-ellipsis overflow-hidden  text-black ">4 hours ago</p>
                                        </div>

                                    </CardContent>

                                </Card>
                            </Link>
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
                    </Dialog>

                    <Pagination className="mt-4 col-span-2">
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
                </div>
            </div>

        </>
    )
}