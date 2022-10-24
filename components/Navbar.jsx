import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import { Menu, Close, Email } from '@carbon/icons-react'
import { FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed w-full z-[100]  h-20  border-b border-neutral-500 backdrop-blur-lg bg-neutral-50/25">

        {/* top nav */}
        <div className="flex justify-between items-center w-full h-full px-8 " >
            <Image src="/../public/assets/svg/ccchaos-gradient-squared.png" alt="/" width="50" height="50" className="rounded-full hover:rotate-180 transition-all duration-1000" />
            {/* <Image src="/../public/assets/svg/sssquiggly.png" alt="/" width="50" height="50"  /> */}
            <div>
                <ul className="hidden md:flex items-center text-neutral-900" >
                    <Link href='/' target="_blank">
                        <li className="ml-10 text-sm uppercase" >Home</li>
                    </Link>
                    <Link href='/' target="_blank">
                        <li className="ml-10 text-sm uppercase" >About</li>
                    </Link>
                    <Link href='/' target="_blank">
                        <li className="ml-10 text-sm uppercase" >Skills</li>
                    </Link>
                    <Link href='/' target="_blank">
                        <li className="ml-10 text-sm uppercase" >Projects</li>
                    </Link>
                    <Link href='/' target="_blank">
                        <li className="ml-10 text-sm uppercase" >Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden cursor-pointer' >
                    <Menu size={24} />
                </div>
            </div>
        </div>

        {/* side nav */}
        <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 transition-all duration-500' : 'transition-all duration-500' } >
            <div 
                className={ 
                    nav 
                    ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-neutral-50 p-10 transition-all duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 transition-all duration-500 '
                } 
            >

                <div>

                    <div className="flex w-full items-center justify-between" >
                        <Image src="/../public/assets/skills/node-js.png" alt="/" width="50" height="50" />
                        <div onClick={handleNav} className=" cursor-pointer hover:scale-105 hover:rotate-90 transition-all" >
                            <Close size={24} />
                        </div>
                    </div>

                    <div className="border-b my-4" >
                        <p className="py-4" >Some text here</p>
                    </div>

                </div>

                <div className="py-4 flex flex-col" >
                    <ul>
                        <Link href='/' target="_blank">
                            <li className="py-4 text-sm hover:translate-x-1 transition-all" >Home</li>
                        </Link>
                        <Link href='/' target="_blank">
                            <li className="py-4 text-sm hover:translate-x-1 transition-all" >About</li>
                        </Link>
                        <Link href='/' target="_blank">
                            <li className="py-4 text-sm hover:translate-x-1 transition-all" >Skills</li>
                        </Link>
                        <Link href='/' target="_blank">
                            <li className="py-4 text-sm hover:translate-x-1 transition-all" >Projects</li>
                        </Link>
                        <Link href='/' target="_blank">
                            <li className="py-4 text-sm hover:translate-x-1 transition-all" >Contact</li>
                        </Link>
                    </ul>
                    <div className="pt-40" >
                        <p className="uppercase tracking-widest" >
                            Let's connect
                        </p>
                        <div className="flex items-center justify-between my-4 " >
                            <div>
                                <FaLinkedinIn size={24} />
                            </div>
                            <div>
                                <FaGithub size={24} />
                            </div>
                            <div>
                                <Email size={24} />
                            </div>
                            <div>
                                <FaDiscord size={24} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Navbar