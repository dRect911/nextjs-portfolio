/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { Email } from '@carbon/icons-react'
import { FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa'

const Contact = () => {
    const newLocal = "../public/assets/svg/ccchaos-squared.png"
  return (
    <div className="w-full md:h-screen p-10 " >
            <div className="w-full m-auto flex flex-col justify-center p-6 rounded-2xl border mr-2 border-neutral-600 shadow-md bg-neutral-50/25 backdrop-blur-sm" >
                <p className="tracking-widest mb-2 " >CONTACT .</p>
                <h1 className="" >Get in touch</h1>
                <div className="grid grid-cols-5">

                    {/* left */}
                    <div className="col-span-2 lg:col-span-1 w-full h-full py-6 transition-all">
                        <div className="" >
                            <Image src="/../public/assets/svg/ccchaos-squared-1k.png" width={700} height={700} alt="/" className="" />
                        </div>
                        <div className="">
                            <h2 className="pt-4" >Kenneth PRINCE AGBODJAN</h2>
                            <p className="italic py-2" >Front-End Developer</p>
                            <p className="py-4" >I'm available for freelance of full-time positions. Contact me and let's talk.</p>
                        </div>
                        <div className=" lg:px-4 lg:mt-8">
                            <p className="py-4 text-center">CONNECT WITH ME .</p>
                            <div  className="flex w-3/4 justify-between items-center py-4 m-auto" >
                                <div>
                                    <FaLinkedinIn size={24} className="text-neutral-600" />
                                </div>
                                <div>
                                    <FaGithub size={24} className="text-neutral-600" />
                                </div>
                                <div>
                                    <Email size={24} className="text-neutral-600" />
                                </div>
                                <div>
                                    <FaDiscord size={24} className="text-neutral-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* right */}
                    <div className="col-span-3 lg:col-span-4 w-full h-auto p-4">
                        <form>
                            <div className="grid grid-cols-2 w-full">

                            </div>
                        </form>

                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Contact