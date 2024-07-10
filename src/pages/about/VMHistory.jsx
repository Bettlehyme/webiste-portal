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

                            <div>

                                <div class="flex gap-x-3">

                                    <div class="w-16 text-end">
                                        <span class="text-xs text-gray-500">2020</span>
                                    </div>

                                    <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                        <div class="relative z-10 size-7 flex justify-center items-center">
                                            <div class="size-2 rounded-full bg-gray-400"></div>
                                        </div>
                                    </div>

                                    <div class="grow pt-0.5 pb-8">
                                        <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
                                            <svg class="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" x2="8" y1="13" y2="13"></line>
                                                <line x1="16" x2="8" y1="17" y2="17"></line>
                                                <line x1="10" x2="8" y1="9" y2="9"></line>
                                            </svg>
                                            Created "Preline in React" task
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-600">
                                            Find more detailed insctructions here.
                                        </p>

                                    </div>

                                </div>

                                <div class="flex gap-x-3">

                                    <div class="w-16 text-end">
                                        <span class="text-xs text-gray-500">2021</span>
                                    </div>

                                    <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                        <div class="relative z-10 size-7 flex justify-center items-center">
                                            <div class="size-2 rounded-full bg-gray-400"></div>
                                        </div>
                                    </div>

                                    <div class="grow pt-0.5 pb-8">
                                        <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
                                            Release v5.2.0 quick bug fix 🐞
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-600">
                                            Find more detailed insctructions here.
                                        </p>
                                    </div>

                                </div>

                                <div class="flex gap-x-3">

                                    <div class="w-16 text-end">
                                        <span class="text-xs text-gray-500">2022</span>
                                    </div>

                                    <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                        <div class="relative z-10 size-7 flex justify-center items-center">
                                            <div class="size-2 rounded-full bg-gray-400"></div>
                                        </div>
                                    </div>

                                    <div class="grow pt-0.5 pb-8">
                                        <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
                                            Marked "Install Charts" completed
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-600">
                                            Finally! You can check it out here.
                                        </p>

                                    </div>

                                </div>

                                <div class="flex gap-x-3">

                                    <div class="w-16 text-end">
                                        <span class="text-xs text-gray-500">2023</span>
                                    </div>

                                    <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                        <div class="relative z-10 size-7 flex justify-center items-center">
                                            <div class="size-2 rounded-full bg-gray-400"></div>
                                        </div>
                                    </div>

                                    <div class="grow pt-0.5 pb-8">
                                        <h3 class="flex gap-x-1.5 font-semibold text-gray-800">
                                            Take a break ⛳️
                                        </h3>
                                        <p class="mt-1 text-sm text-gray-600">
                                            Just chill for now... 😉
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </CardContent>
                    </Card>
                </Fade>
            </div>
        </>
    )
}