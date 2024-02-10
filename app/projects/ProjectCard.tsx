import React from 'react'

const ProjectCard = ({src,title,desp,link}) => {
  return (
    <div>
        <div>
            <Image height="" width="" src={src} alt={title}/>
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