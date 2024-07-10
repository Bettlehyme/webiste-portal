import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const teams = {
    organization: {
        title: "Organization Chart",
        content: "APRIL Group is a leading producer of renewable fiber and bio-based products, with forestry and manufacturing operations in Riau Province, Sumatra, Indonesia. The company is a business group of Singapore-headquartered global resources company, Royal Golden Eagle (RGE).",

    },
    team1: {
        title: "Team 1",
        content: "APRIL Group is a leading producer of renewable fiber and bio-based products, with forestry and manufacturing operations in Riau Province, Sumatra, Indonesia. The company is a business group of Singapore-headquartered global resources company, Royal Golden Eagle (RGE).",

    },
    team2: {
        title: "Team 2",
        content: "Details about Team 2 go here...",

    },
    team3: {
        title: "Team 3",
        content: "Details about Team 3 go here...",

    },
};

function changeValue(item) {

}

export default function OurTeams() {
    const [activeTeam, setActiveTeam] = useState('team1');

    return (
        <>
            <Fade direction="down" triggerOnce={true}>
                <Card className="overflow-hidden h-96 ">
                    <div className="overflow-hidden h-96 bg-[url('../home-img2.jpg')] bg-cover bg-center overflow-hidden transition ease-in-out hover:scale-105  ">
                        {/* <b className="absolute inset-0">Breif Explenation</b> */}

                    </div>
                </Card>
            </Fade>
            <div className="p-6 min-h-screen">
                <div className="flex space-x-4">
                    {/* Sidebar */}
                    <Fade direction="up" triggerOnce={true} className="w-1/4 h-fit">
                        <Card className="p-4">
                            <h2 className="text-xl font-semibold mb-4">Our Teams</h2>
                            <ul>
                                {Object.keys(teams).map(team => (
                                    <li key={team} className="mb-2">
                                        <button
                                            className={`w-full text-left hover:bg-gray-200 hover:text-black p-2 rounded-lg ${activeTeam === team ? 'bg-black text-white' : ''}`}
                                            onClick={() => setActiveTeam(team)}
                                        >
                                            {teams[team].title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Fade>
                    {/* Content Area */}
                    <Fade direction="up" triggerOnce={true} className="w-3/4 ">

                        <Card className=" p-4">
                            <h1 className="text-2xl font-semibold ">{teams[activeTeam].title}</h1>
                            <div className="py-4 indent-4">{teams[activeTeam].content}</div>
                        </Card>
                    </Fade>
                </div>
            </div>
        </>
    )
}