import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, CircleUser, Menu, Package2, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


function Navbar() {
    return (

        <header className="sticky top-0 z-10 backdrop-blur-md bg-white/50 flex flex-wrap h-16 lg:justify-center content-center border-b bg-background px-4 md:px-6">
            <link type="stylesheet" src="../../index.css" />
            <nav className="hidden flex-col gap-6  text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    to={"#"}
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <img src="/logo-april.png" width={100} />
                </Link>
                <Link
                    to="/"
                    className="text-foreground transition-colors hover:text-foreground"
                >
                    Home
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <a to={"#"} variant="secondary" size="icon" className="text-muted-foreground transition-colors hover:text-foreground">
                            <span className="flex items-center">About<ChevronDown width={20} /></span>
                        </a>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem><Link to="/about/vision-mission-history">Vision Mission & History</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/about/our-teams">Our Teams</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />

                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <a to={"#"} variant="secondary" size="icon" className="text-muted-foreground transition-colors hover:text-foreground">
                            <span className="flex   items-center">Facilities<ChevronDown width={20} /></span>
                        </a>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem><Link to="/facilities/building">Building (Pangkalan Kerinci)</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/facilities/sfotc">SFOTC</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/facilities/tc-ptsi">TC PTSI Building</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />

                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <a to={"#"} variant="secondary" size="icon" className="text-muted-foreground transition-colors hover:text-foreground">
                            <span className="flex items-center">Training Program<ChevronDown width={20} /></span>
                        </a>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem><Link to="/training-program/our-training-program">Our Training Program</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/training-program/training-calendar">Training Calendar</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />

                    </DropdownMenuContent>
                </DropdownMenu>
                <Link
                    to={"event-gallery"}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Event Gallery
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <a to={"#"} variant="secondary" size="icon" className="text-muted-foreground transition-colors hover:text-foreground">
                            <span className="flex items-center">Other Apps<ChevronDown width={20} /></span>
                        </a>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem><Link to="/other-apps/library">Library</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/other-apps/dlp">DLP Booking System</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />

                    </DropdownMenuContent>
                </DropdownMenu>
                <Link
                    to={"/contact"}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Contact
                </Link>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">

                        <Link
                            to={"#"}
                            className="flex items-center gap-2 text-lg font-semibold md:text-base"
                        >
                            <img src="/logo-april.png" width={100} />
                        </Link>
                        <Link
                            to="/"
                            className="text-foreground transition-colors hover:text-foreground"
                        >
                            Home
                        </Link>

                        <Accordion type="single" collapsible >
                            <AccordionItem value="item-1" className="border-none">
                                <AccordionTrigger className="hover:no-underline ">About</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-3 text-lg pl-4 text-black/70">
                                    <Link to="/about/vision-mission-history">Vision Mission & History</Link>
                                    <Link to="/about/our-teams">Our Teams</Link>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-none">
                                <AccordionTrigger className="hover:no-underline ">Facilities</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-3 text-lg pl-4 text-black/70">
                                    <Link to="/facilities/building">Building (Pangkalan Kerinci)</Link>
                                    <Link to="/facilities/sfotc">SFOTC</Link>
                                    <Link to="/facilities/tc-ptsi">TC PTSI Building</Link>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-none">
                                <AccordionTrigger className="hover:no-underline ">Training</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-3 text-lg pl-4 text-black/70">
                                    <Link to="/training-program/our-training-program">Our Training Program</Link>
                                    <Link to="/training-program/training-calendar">Training Calendar</Link>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem className="py-5 border-none">
                                <Link
                                    to={"event-gallery"}
                                    className="text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Event Gallery
                                </Link>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-none">
                                <AccordionTrigger className="hover:no-underline ">Other Apps</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-3 text-lg pl-4 text-black/70">
                                    <Link to="/other-apps/library">Library</Link>
                                    <Link to="/other-apps/dlp">DLP Booking System</Link>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem className="py-5 border-none">
                                <Link
                                    to={"/contact"}
                                    className="text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    Contact
                                </Link>
                            </AccordionItem>
                        </Accordion>

                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">


                    </div>
                </form>

            </div>
        </header>


    )
}

export default Navbar