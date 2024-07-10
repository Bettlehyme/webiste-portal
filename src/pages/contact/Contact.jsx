import {
    Card,
    CardContent,

} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Fade } from "react-awesome-reveal"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Contact() {
    const contacts = [
        {
            title: 'Technical Mill',
            name: 'Sri Wahdini Rahmi',
            email: 'SriWRahmi@aprilasia.com',
            extension: '9454',
        },
        {
            title: 'Education Program',
            name: 'Nanda Patricia Flowerence',
            email: 'patricia_flowerence@aprilasia.com',
            extension: '4098',
        },
        {
            title: 'PTSI Training Center',
            name: 'Abdul Rahman',
            email: 'Abdul_Rahman@kerinci.lcl',
            extension: '4727',
        },
        {
            title: 'ALJ Technical Maintenance (ATM)',
            name: 'Guswerti',
            email: 'Guswerti@aprilasia.com',
            extension: '9444',
        },
        {
            title: 'Technical Training Fiber',
            name: 'Rihat Ritonang',
            email: 'Rihat_Ritonang@kerinci.lcl',
            extension: '9279',
        },
        {
            title: 'Technical Rayon',
            name: 'Andri',
            email: 'Andri@kerinci.lcl',
            extension: '4100',
        },
        {
            title: 'Assessment Center',
            name: 'Marshella Cen',
            email: 'Marshella_Cen@aprilasia.com',
            extension: '9304',
        },
        {
            title: 'Leadership & Development Soft Skill',
            name: 'Yustina Librani Lestari',
            email: 'yustina_lestari@aprilasia.com',
            extension: '9445',
        },
        {
            title: 'General Training and Services',
            name: 'Lusi Verawati Purba',
            email: 'Lusi_Purba@aprilasia.com',
            extension: '9446',
        },
        {
            title: 'Technical Board Mill',
            name: 'Mario Sent Anugrah',
            email: 'mario_anugrah@aprilasia.com',
            extension: '4575',
        },
    ];
    return (
        <>
            <Fade direction="down" triggerOnce={true}>
                <Card className="overflow-hidden h-96 ">
                    <div className="overflow-hidden h-96 bg-[url('../home-img2.jpg')] bg-cover bg-center overflow-hidden transition ease-in-out hover:scale-105  ">
                        {/* <b className="absolute inset-0">Breif Explenation</b> */}

                    </div>
                </Card>
            </Fade>
            <div className="flex flex-col items-center p-10 gap-4">
                <Fade direction="up" triggerOnce={true}>
                    <Label className="text-3xl">Contact</Label>
                </Fade>
            </div>
            <Fade direction="up" cascade damping={0.1}>
                <Card>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Email Address</TableHead>
                                    <TableHead>Extension</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {contacts.map((contact, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{contact.title}</TableCell>
                                        <TableCell>{contact.email}</TableCell>
                                        <TableCell>{contact.extension}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

            </Fade>
        </>
    )
}