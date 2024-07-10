import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Fade } from "react-awesome-reveal";
export default function EventGallery() {

    return (
        <>
            <Fade direction="up" triggerOnce={true}>
                <Card className="overflow-hidden h-96 ">
                    <div className="overflow-hidden h-96 bg-[url('../home-img2.jpg')] bg-cover bg-center overflow-hidden transition ease-in-out hover:scale-105  ">
                        {/* <b className="absolute inset-0">Breif Explenation</b> */}

                    </div>
                </Card>
            </Fade>
            <div className="grid grid-cols-2 p-10 gap-4">

                <Fade direction="up" triggerOnce={true} className="col-span-2">
                    <Card className="h-fit text-center col-span-2" >
                        <CardHeader>
                            <CardTitle className="overflow-hidden">Event Gallery</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col gap-3">
                                <div className="overflow-hidden w-full h-fit rounded-xl">
                                    <Carousel className="w-full transition ease-in-out hover:scale-105"
                                        plugins={[
                                            Autoplay({
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

                                </div>
                                <div>Gallery Title</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="overflow-hidden w-full h-fit rounded-xl">
                                    <Carousel className="w-full transition ease-in-out hover:scale-105"
                                        plugins={[
                                            Autoplay({
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

                                </div>
                                <div>Gallery Title</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="overflow-hidden w-full h-fit rounded-xl">
                                    <Carousel className="w-full transition ease-in-out hover:scale-105"
                                        plugins={[
                                            Autoplay({
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

                                </div>
                                <div>Gallery Title</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="overflow-hidden w-full h-fit rounded-xl">
                                    <Carousel className="w-full transition ease-in-out hover:scale-105"
                                        plugins={[
                                            Autoplay({
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

                                </div>
                                <div>Gallery Title</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="overflow-hidden w-full h-fit rounded-xl">
                                    <Carousel className="w-full transition ease-in-out hover:scale-105"
                                        plugins={[
                                            Autoplay({
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

                                </div>
                                <div>Gallery Title</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="overflow-hidden w-full h-fit rounded-xl">
                                    <Carousel className="w-full transition ease-in-out hover:scale-105"
                                        plugins={[
                                            Autoplay({
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

                                </div>
                                <div>Gallery Title</div>
                            </div>
                            <Pagination className="mt-4 col-span-3">
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

                </Fade>
            </div>
        </>
    )
}