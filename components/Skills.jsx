import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className="w-full pb-32 p-2 py-6 " >
        <div className="w-[90%] mx-auto md:h-1/2 md:grid grid-cols-3  " >

            <div className="invisible lg:visible lg:col-span-1 md:h-full flex justify-center items-center rounded-2xl  ml-2 " >
                <div className="backdrop-blur-sm rounded-full border border-neutral-600" >
                    <Image src="/../public/assets/svg/nnneon.png" alt="/" width="300" height="300" className="animate-spin" />
                </div>
            </div>

            <div className="col-span-3 md:col-span-2 md:h-full flex flex-col justify-center py-8 md:pr-12   md:ml-2 " >
                <div className="p-6 border border-neutral-600 shadow-md bg-neutral-50/25 dark:bg-neutral-900/25 backdrop-blur-sm rounded-2xl" >
                    <p className="tracking-widest mb-2 dark:text-neutral-400" >SKILLS .</p>
                    <h1 className="dark:text-neutral-200" >What I Can Do</h1>
                    <p className="py-4 text-lg dark:text-neutral-300" >
                        A look at the skills I have
                    </p>
                </div>
            </div>

        </div>

        {/* Languages */}
        <div className="mt-16 w-[90%] mx-auto pb-4 md:pb-8 border border-neutral-600 rounded-2xl backdrop-blur-sm lg:saturate-0 hover:saturate-100 transition-all duration-300 " >
            <h1 className="py-6 text-center font-medium dark:text-neutral-200 text-4xl md:text-5xl" >Languages</h1>
            <div className="w-full mx-auto lg:w-[75%] md:flex flex-wrap justify-center p-4  " >
                
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Javascript</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/js.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Java</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/java.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >C#</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/c-sharp.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Python</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/python.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>

            </div>
        </div>

        {/* Frontend Technologies */}
        <div className="mt-16 w-[90%] mx-auto pb-4 md:pb-8 border border-neutral-600 rounded-2xl backdrop-blur-sm lg:saturate-0 hover:saturate-100 transition-all duration-300 " >
            <h1 className="py-6 text-center font-medium dark:text-neutral-200 text-4xl md:text-5xl" >Frontend Technologies</h1>
            <div className="w-full mx-auto lg:w-[75%] md:flex flex-wrap justify-center p-4 " >
                
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl  lg:text-4xl font-medium py-2 dark:text-neutral-300" >React</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/react-js.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl  lg:text-4xl font-medium py-2 dark:text-neutral-300" >Redux</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/redux-nameles.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl  lg:text-4xl font-medium py-2 dark:text-neutral-300" >Next</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/next-js.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl  lg:text-3xl font-medium py-2 dark:text-neutral-300" >Tailwind CSS</p>
                    <div className=" flex justify-center pt-6  " >
                        <Image src="/../public/assets/skills/tailwind-css.png" alt="/" width={100} height={60} className="" />
                    </div>
                </div>
            </div>
        </div>

        {/* Backend Technologies */}
        <div className="mt-16 w-[90%] mx-auto pb-4 md:pb-8 border border-neutral-600 rounded-2xl backdrop-blur-sm lg:saturate-0 hover:saturate-100 transition-all duration-300 " >
            <h1 className="py-6 text-center font-medium dark:text-neutral-200 text-4xl md:text-5xl" >Backend Technologies</h1>
            <div className="w-full mx-auto lg:w-[75%] md:flex flex-wrap justify-center p-4 " >
                
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >NodeJS</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/node-js.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Express</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/express-js.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >Flask</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/flask.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl font-medium py-2 dark:text-neutral-300" >ASP.NET Core</p>
                    <div className=" flex justify-center  " >
                        <Image src="/../public/assets/skills/dotnet-core.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>

            </div>
        </div>

        {/* Databases */}
        <div className="mt-16 w-[90%] mx-auto pb-4 md:pb-8 border border-neutral-600 rounded-2xl backdrop-blur-sm lg:saturate-0 hover:saturate-100 transition-all duration-300 " >
            <h1 className="py-6 text-center font-medium dark:text-neutral-200 text-4xl md:text-5xl" >Databases</h1>
            <div className="w-full mx-auto lg:w-[75%] md:flex flex-wrap justify-center p-4 " >
                
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >MongoDB</p>
                    <div className=" flex justify-center pt-2 " >
                        <Image src="/../public/assets/skills/mongodb-icon.png" alt="/" width={45} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-3xl lg:text-4xl font-medium py-2 dark:text-neutral-300" >PostgreSQL</p>
                    <div className=" flex justify-center pt-2 " >
                        <Image src="/../public/assets/skills/postgres-nameless.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
                <div className="md:w-[20%] h-[25vh] p-6 flex flex-col jusitfy-center items-center m-4 border border-neutral-600 shadow-md bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl " >
                    <p className="text-2xl md:text-2xl font-medium py-2 dark:text-neutral-300" >MS SQL Server</p>
                    <div className=" flex justify-center pt-4 " >
                        <Image src="/../public/assets/skills/sql-server.png" alt="/" width={100} height={100} className="" />
                    </div>
                </div>
            </div>
        </div>
        
        

    </div>
  )
}

export default Skills