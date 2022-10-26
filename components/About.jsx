/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'



const About = () => {
  return (
    <div className="w-full md:h-screen p-2 py-6 flex items-center" >
        <div className="w-[90%] mx-auto h-1/2 md:grid grid-cols-3  " >
            <div className="col-span-3 md:col-span-2 h-full flex flex-col justify-center p-6 pr-12 rounded-2xl border mr-2 border-neutral-600 shadow-md bg-neutral-50/25 backdrop-blur-sm" >
                <p className="tracking-widest mb-2 " >ABOUT .</p>
                <h1>Who I am</h1>
                <p className="py-4 text-lg" >
                    I am Kenneth PRINCE AGBODJAN, a 21 years old front-end web developer. Actually pursuing a Computer Science Degree, i was already fascinated by programming since my high school.
                    I always have been amazed by beautiful and creative websites and how to build them, then my self-taught front-end developer journey began. Since I still be learning everyday some new skills to improve my works.
                    I'm planning to learn more advanced back-end skills to become a fullstack dev.
                </p>

            </div>

            {/* neon circle image */}
            <div className="invisible md:visible md:col-span-1 h-full flex justify-center items-center rounded-2xl  ml-2 " >
                <div className="backdrop-blur-sm rounded-full border border-neutral-600" >
                    <Image src="/../public/assets/svg/nnneon.png" alt="/" width="300" height="300" className="animate-spin" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default About