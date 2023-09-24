import React from 'react'
import img1 from '../utils/sec4img1.png'
import img2 from '../utils/sec4img1.png'
import img3 from '../utils/sec4img1.png'

const Section4 = () => {
  return (
    <div className='text-center'>
        <h1 className='text-white'>
        Generative Fill
        </h1>
        <p className='text-white'>
        Create, add to, remove or replace images right in Generaet.One with simple text prompts
        </p>
        <div>
            <div className='bg-[#171717] h-[10rem] w-[10rem]'>
                <img src={img1} />
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Section4