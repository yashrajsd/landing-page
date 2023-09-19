import React from 'react'
import sec1img from '../utils/sec1img.jpg'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import img1 from '../utils/img1.png'
import img2 from '../utils/img2.png'
import img3 from '../utils/img3.png'
import img4 from '../utils/img4.png'
import img5 from '../utils/img5.png'
import img6 from '../utils/img6.png'

const Section1 = () => {
    const BoldFont = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 800, // bold (600) weight
    };

    const MediumPoppins ={
        fontFamily:'Poppins, sans-serif',
    }

  return (
    <div className='mt-24 flex flex-col justify-center gap-[8vw] items-center'>
        <div className='text-center flex flex-col items-center justify-center gap-[2rem]'>
            <h1 className='text-white text-[4.4rem] m-0' style={{...BoldFont,lineHeight:'1'}}>Explore the <span>Power</span> of AI!</h1>
            <p className='text-[#CECECE] text-[0.9rem] font-small' style={MediumPoppins}>generate.one is a suite of magical AI tools. Generate original images at scale, modify photos,<br/>expand pictures beyond their original borders, or create custom AI models.</p>
            <button className='rounded-full border-[1px] border-[#2A2A2A] lg:w-[20rem] text-white flex lg:h-[3.5rem] justify-center items-center' style={MediumPoppins} >
                <span className='w-[70%]'>
                Get Started   
                </span> 
                <span className='w-[30%] h-[100%]'>
                <div className='rounded-full bg-[#6507FF] h-[100%] flex justify-center items-center'>
                    <RocketLaunchIcon className='text-white'/>
                </div>
                </span>
            </button>
            <p className='text-white font-semibold text-[0.8rem] bg-[#1D1D1D] py-[0.7rem] px-[1rem] rounded-full'><span className='text-[#6507FF]'>100 free credits/month</span> no credit card required</p>
        </div>
        <div className='sec1gradient relative' style={{...MediumPoppins}}>
          <img src={sec1img} alt="" className='rounded-t-[3.5vw] w-[68.958vw] h-[27.135vw]' />
          <div className='grid grid-rows-2 grid-flow-col gap-4 transperant-black absolute'>
            <div>
                <h1 className='text-white flex gap-[1rem]'><img src={img1}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem]'><img src={img2}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem]'><img src={img3}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem]'><img src={img4}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem]'><img src={img5}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            <div>
                <h1 className='text-white flex gap-[1rem]'><img src={img6}/> Generate Fill</h1>
                <p className='text-white font-normal'>Unleash the power of image creation with ease. Produce stunning visuals and graphics.</p>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Section1