import React from 'react'
import { Email } from '@carbon/icons-react'
import { FaGithub, FaLinkedinIn, FaDiscord } from 'react-icons/fa'

const Main = () => {
  return (
    <>
    <div className="w-full h-screen text-center flex justify-center items-center" >
        <div className="group w-2/3 md:w-1/2 p-8 mx-auto my-auto  rounded-2xl border border-neutral-600 shadow-md bg-neutral-50/25 backdrop-blur-sm" >
            <p className="uppercase text-sm tracking-widest text-neutral-600" >
                LET'S BUILD SOMETHING TOGETHER
            </p>
            <h1 className="py-4 text-neutral-700" >
                Hi, I'm <span className="bg-clip-text group-hover:text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500" >Kenneth</span>
            </h1>
            <h1 className="py-2 text-neutral-700" >
                Front-End Developer
            </h1>
            <p className="py-4 w-[80%] text-neutral-600 m-auto " >
                I'm a front-end web developer specializing in building exceptional digital experiences. Currently i'm focused on building responsive front-end web applications while learning back-end technologies.
            </p>
            <div  className="flex w-1/2 justify-between items-center py-4 m-auto" >
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

    {/* dark section just testing stuffs */}
    {/* <div className="w-full h-screen text-center flex justify-center items-center" >
        <div className="group w-2/3 md:w-1/2 p-8 mx-auto my-auto  rounded-2xl border border-neutral-600 bg-neutral-900/25 shadow-md backdrop-blur-sm" >
            <p className="uppercase text-sm tracking-widest text-neutral-400" >
                LET'S BUILD SOMETHING TOGETHER
            </p>
            <h1 className="py-4 text-neutral-200" >
                Hi, I'm <span className="bg-clip-text group-hover:text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all " >Kenneth</span>
            </h1>
            <h1 className="py-4 text-neutral-200" >
                A Junior Front-End Developer
            </h1>
            <p className="py-4 w-[80%] text-neutral-300 m-auto " >
                I'm a front-end web developer specializing in building exceptional digital experiences. Currently i'm focused on building responsive front-end web applications while learning back-end technologies.
            </p>
            <div  className="flex w-1/2 justify-between items-center py-4 m-auto" >
                <div>
                    <FaLinkedinIn size={24} className="text-neutral-400" />
                </div>
                <div>
                    <FaGithub size={24} className="text-neutral-400" />
                </div>
                <div>
                    <Email size={24} className="text-neutral-400" />
                </div>
                <div>
                    <FaDiscord size={24} className="text-neutral-400" />
                </div>
            </div>

        </div>
    </div> */}
    </>
    
  )
}

export default Main