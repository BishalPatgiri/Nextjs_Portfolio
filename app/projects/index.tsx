import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectsList } from '@/constants'


const Projects = () => {
  return (
    <div className='page-height'>
        <div>
            <p className="font-bold text-2xl">PROJECTS</p>
            <div>
                {
                    ProjectsList.map(ele=>(
                        <ProjectCard
                        image={ele.image}
                        git={ele.git}
                        text={ele.text}
                        deployed={ele.deployed}
                        title={ele.title}
                         />
                    ))
                
                }
            </div>
        </div>
    </div>
  )
}

export default Projects