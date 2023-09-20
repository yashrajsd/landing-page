import React from 'react'
import img1 from '../utils/img1.png'
import img2 from '../utils/img2.png'
import img3 from '../utils/img3.png'
import img4 from '../utils/img4.png'
import img5 from '../utils/img5.png'
import img6 from '../utils/img6.png'

const Section2 = () => {
  return (
   <div className=' flex justify-center items-center '>
     <div className='grid grid-rows-2 grid-flow-col gap-4 transperant-black w-[80%] lg:p-[5rem]'>
            <div>
                <h1 className='text-white flex gap-[1rem] items-center'><img src={img1}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem] items-center'><img src={img2}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem] items-center'><img src={img3}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem] items-center'><img src={img4}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem] items-center'><img src={img5}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem] items-center'><img src={img6}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            
          </div>
   </div>
  )
}

export default Section2