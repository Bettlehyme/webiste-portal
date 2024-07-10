
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="border-t-2  py-8">
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-start ">

                    <div className="flex flex-col w-1/2">
                        <img src="/logo-april.png" width={140} />
                        <p className='w-2/4 text-sm mt-5'>Operasional pabrik pulp dan kertas
                            serta perkebunan Grup Asia Pacific
                            Resources International Limited (APRIL)
                            yang utama berada di dan sekitar kota
                            Pangkalan Kerinci, Provinsi Riau, Indonesia.</p>

                    </div>

                    <div className="grid grid-cols-2 w-1/2">
                        <div className='font-medium col-span-2'>SiteMap</div>
                        <Link to={"#"} >Home</Link>
                        <Link to={"#"}>Vision Mission & History</Link>
                        <Link to={"#"}>Our Teams</Link>
                        <Link to={"#"}>Building</Link>
                        <Link to={"#"}>SFOTC</Link>
                        <Link to={"#"}>TC PTSI Building</Link>
                        <Link to={"#"}>Our Training Program</Link>
                        <Link to={"#"}>Training Calendar</Link>
                        <Link to={"#"}>Event Gallery</Link>
                        <Link to={"#"}>Library</Link>
                        <Link to={"#"}>DLP Booking System</Link>
                        <Link to={"#"}>Contact</Link>


                    </div>
                    <div className="grid grid-cols-2 w-3/2">
                        <div className='font-medium col-span-2'>For Admins</div>
                        <Button onClick={() => { window.location.href = "/login"; }}>Administator</Button>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    &copy; 2024 April. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
