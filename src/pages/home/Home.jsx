import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <>
            <Card className="overflow-hidden h-96 relative ">
            <div className="overflow-hidden h-96 bg-[url('/home-img1.jpg')] bg-cover bg-center overflow-hidden transition ease-in-out hover:scale-105  ">
                    {/* <b className="absolute inset-0">Breif Explenation</b> */}

                </div>
            </Card>
            <div className="grid grid-cols-4 p-10 ">
                <div className="grid grid-cols-2 gap-4 lg:col-span-3  lg:mr-10 sm:col-span-4 sm:mr-0">

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
            </div>
        </>
    )
}