import React from 'react'
import Image from "next/image"
interface InputData{
    image:string
    git:string
    text:string
    deployed:string
    title:string
}

const ProjectCard = ({image,git,text,deployed,title}:InputData) => {
  return (
    <div>
        <div>
            <Image height="400" width="400" src={image} alt={title}/>
        </div>
        <div>
            <h2>{title}</h2>
            <p></p>
            <div className='flex gap-x-6'>
                <div>
                    <link rel="stylesheet" href="" />
                </div>
                <div>
                    <link rel="stylesheet" href="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard