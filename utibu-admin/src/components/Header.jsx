import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;

    return (
        <Navbar className='border-b-2 justify-between'>
            <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-orange-500 via-purple-500 to-red-600 text-white '>UtibuHc</span>
            </Link>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to='/signin'>
                    <Button gradientDuoTone='purpleToBlue' outline>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <div className="flex justify-between w-full">
                    <Navbar.Link active={path === "/"} as={'div'} className="mx-4">
                        <Link to='/'>
                            Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === "/about"} as={'div'} className="mx-4">
                        <Link to='/about'>
                            About
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === "/download"} as={'div'} className="mx-4">
                        <Link to='/projects'>
                            Download
                        </Link>
                    </Navbar.Link>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}
