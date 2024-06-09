import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

const teams = [{
    img:"../home-img1.jpg",
    name:"Organization Chart",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},{
    img:"../team-img-1.jpg",
    name:"Team 1",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},{
    img:"../team-img-1.jpg",
    name:"Team 2",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},{
    img:"../team-img-1.jpg",
    name:"Team 3",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}]

function changeValue(item) {
    
}

export default function OurTeams() {


    return (
        <>
            <Card className="overflow-hidden h-96 ">
                <div className="overflow-hidden h-96 bg-[url('../home-img2.jpg')] bg-cover bg-center overflow-hidden transition ease-in-out hover:scale-105  ">
                    {/* <b className="absolute inset-0">Breif Explenation</b> */}

                </div>
            </Card>
            <div className="grid grid-cols-4 p-10 gap-4">


                <Card >
                    <CardHeader>
                        <CardTitle className="overflow-hidden">Our Teams</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link to={"#"} onClick={changeValue("oc")}  >
                            <div className="w-full p-3 rounded-lg hover:bg-slate-100">
                                Organization Chart
                            </div>
                        </Link>
                        <Link to={"#"}  >
                            <div className="w-full p-3 rounded-lg hover:bg-slate-100">
                                Team 1
                            </div>
                        </Link>
                        <Link to={"#"}  >
                            <div className="w-full p-3 rounded-lg hover:bg-slate-100">
                                Team 2
                            </div>
                        </Link>
                        <Link to={"#"}  >
                            <div className="w-full p-3 rounded-lg hover:bg-slate-100">
                                Team 3
                            </div>
                        </Link>
                        
                    </CardContent>
                </Card>

                <Card className="col-span-3" >
                    <CardHeader>
                        <CardTitle className="overflow-hidden">Team 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>APRIL Group is a leading producer of renewable fiber and bio-based products, with forestry and manufacturing operations in Riau Province, Sumatra, Indonesia. The company is a business group of Singapore-headquartered global resources company, Royal Golden Eagle (RGE).</p>
                    </CardContent>
                    <CardHeader>
                        <CardTitle className="overflow-hidden">Content Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>APRIL Group is a leading producer of renewable fiber and bio-based products, with forestry and manufacturing operations in Riau Province, Sumatra, Indonesia. The company is a business group of Singapore-headquartered global resources company, Royal Golden Eagle (RGE).</p>
                    </CardContent>
                    <CardHeader>
                        <CardTitle className="overflow-hidden  text-md">Content Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-disc px-5">
                            <li>Thing 1</li>
                            <li>Thing 2</li>
                            <li>Thing 3</li>
                            <li>Thing 4</li>
                        </ol>
                    </CardContent>
                </Card>

            </div>
        </>
    )
}