
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    SquareArrowOutUpRight,
    Truck,
    Users2,
} from "lucide-react"
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
import { Input } from "@/components/ui/input"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
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

import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <div className="flex items-center ">
                <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                    <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                            <CardDescription>Posts</CardDescription>
                            <CardTitle className="text-4xl">20</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +5 from last week
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button><Link to="/admin/posts">Create New Post</Link></Button>
                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                            <CardDescription>Upcoming Events</CardDescription>
                            <CardTitle className="text-4xl">12</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +2 from last week
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button><Link to="/admin/trainings">Create New Events</Link></Button>
                        </CardFooter>
                    </Card>
                    <Card x-chunk="dashboard-05-chunk-1">
                        <CardHeader className="pb-2">
                            <CardDescription>Trainings</CardDescription>
                            <CardTitle className="text-4xl">5</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +0 from last week
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button><Link to="/admin/trainings">Create New Trainings</Link></Button>
                        </CardFooter>
                    </Card>

                </div>
                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7 flex flex-row justify-between">
                        <div>
                        <CardTitle>Posts</CardTitle>
                        <CardDescription>
                            Recent post.
                        </CardDescription>
                        </div>
                        <Link to="posts"><SquareArrowOutUpRight/></Link>
                        
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
                                    <TableHead className="text-right">Viewed</TableHead>
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
                                    <TableCell className="text-right">1000</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}