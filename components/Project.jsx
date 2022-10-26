import React from 'react'

const Project = () => {
  return (
    <div className="w-[300px] h-[400px] sm:w-[280px] sm:h-[400px] md:w-[400px] md:h-[480px] lg:w-[320px] lg:h-[420px] lg xl:h-[480px] xl:w-[40%] border border-neutral-600  saturate-0 hover:saturate-100 duration-300 flex flex-col rounded-2xl relative drop-shadow-md transition-all ">
        <img className="h-[240px] sm:h-[200px] md:h-[280px] lg:h-[240px] xl:h-[280px] object-cover rounded-t-xl dark:border-b border-neutral-600" src=''></img>
        {/* img overlay */}
        <div className="h-[240px] sm:h-[200px] md:h-[280px] lg:h-[240px] xl:h-[280px] absolute top-0 left-0 w-full px-4 pt-4  rounded-t-xl  flex justify-end  ">
            <div className="text-left " >
                {/* <h5 className="text-white" >{moment(post.createdAt).fromNow()}</h5> */}
            </div>
            {/* go-to icon here */}
        </div>

        <div className="bg-neutral-50/50 backdrop-blur-sm min-h-24 pb-4 ">
            {/* stacks */}
            <div className="tags flex flex-wrap p-2" >
                {/* used stacks icons here */}
            </div>
            {/* title and message */}
            <h2 className="text-2xl font-medium text-start py-1 pl-4  " >Project Name</h2>
            <p className="text-sm text-justify px-4 " >Project small desc</p>
        </div>
        
    </div>
  )
}

export default Project