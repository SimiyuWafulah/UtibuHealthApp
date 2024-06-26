import React from 'react'
import {Navbar, Button, Dropdown, Avatar} from 'flowbite-react'
import { Link , useLocation} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon,FaSun} from 'react-icons/fa'


export default function Header() {
    const path = useLocation().pathname

  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 rounded-lg bg-gradient-to-r from-orange-500 via-purple-500 to-red-600 text-white '>UtibuHc</span>
      </Link>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color ='gray' pill>
            <FaMoon/> 
        </Button>
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>
                Sign In
            </Button>
        </Link>
    

        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
            <Navbar.Link active={path ==="/"} as={'div'}>
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path ==="/about"} as={'div'}>
                <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path ==="/download"} as={'div'}>
                <Link to='/projects'>
                    Download
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}