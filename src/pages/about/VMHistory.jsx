import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function VMHistory() {

    return (
        <>
            <Fade direction="down" triggerOnce={true}>
                <Card className="overflow-hidden h-96 ">
                    <div className="overflow-hidden h-96 bg-[url('../home-img2.jpg')] bg-cover bg-center overflow-hidden transition ease-in-out hover:scale-105  ">
                        {/* <b className="absolute inset-0">Breif Explenation</b> */}

                    </div>
                </Card>
            </Fade>
            <div className="grid grid-cols-2 p-10 gap-4">

                <Fade direction="up" triggerOnce={true}>
                    <Card className="h-64 text-center" >
                        <CardHeader>
                            <CardTitle className="overflow-hidden">Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>APRIL Group is a leading producer of renewable fiber and bio-based products, with forestry and manufacturing operations in Riau Province, Sumatra, Indonesia. The company is a business group of Singapore-headquartered global resources company, Royal Golden Eagle (RGE).</p>
                        </CardContent>
                    </Card>
                </Fade>
                <Fade direction="up" triggerOnce={true}>
                    <Card className="h-64 text-center" >
                        <CardHeader>
                            <CardTitle className="overflow-hidden">Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>APRIL Group is a leading producer of renewable fiber and bio-based products, with forestry and manufacturing operations in Riau Province, Sumatra, Indonesia. The company is a business group of Singapore-headquartered global resources company, Royal Golden Eagle (RGE).</p>
                        </CardContent>
                    </Card>
                </Fade>
                <Fade direction="up" triggerOnce={true} className="col-span-2">
                    <Card className="flex flex-col items-center  col-span-2">
                        <CardHeader>
                            <CardTitle>Milestone</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="w-full overflow-hidden rounded-xl">
                                <img src="/home-img1.jpg"  className="object-cover w-full" />
                            </div>
                        </CardContent>
                    </Card>
                </Fade>
            </div>
        </>
    )
}