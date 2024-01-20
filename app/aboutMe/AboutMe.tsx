import React from 'react'
import Image from "next/image"
import BishalPic from "../../assets/images/Bishal.jpg"

const AboutMe = () => {
  return (
    <div className='page-height flex align-middle items-center gap-x-20'>
            <div className='h-2/3 w-1/3 max-lg:h-1/2 max-md:h-2/5 max-sm:h-1/3'>
                <Image src={BishalPic} alt="" width={'400'} height={600} style={{height:"100%",width:"100%",borderRadius:"50%"}} />
            </div>
            <div className='w-2/3'>
                <p>
                Dynamic Full Stack Developer with a flair for innovation and a dedicated towards work. I bring a blend of passion and expertise to drive holistic development, actively contributing to key solutions using microservices architecture. A collaborative team player, I thrive in accelerating development through active participation. Always at the forefront of tech trends, I ensure every platform I built remains cutting-edge. Love to code. Elevate your team with a developer dedicated to excellence and innovation.
                </p>

            </div>
    </div>
  )
}

export default AboutMe