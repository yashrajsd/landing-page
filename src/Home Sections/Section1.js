import React from 'react'
import sec1img from '../utils/sec1img.jpg'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Fade from 'react-reveal'

const Section1 = () => {
    const BoldFont = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '600', // bold (600) weight
    };

    const MediumPoppins ={
        fontFamily:'Poppins, sans-serif',
        fontWeight:'600'
    }

  return (
    <div className='mt-24 flex flex-col justify-center gap-[8vw] items-center'>
        <Fade bottom>
        <div className='text-center flex flex-col items-center justify-center gap-[2rem] relative z-[-999]'>
            <h1 className='text-white lg:text-[3.8rem] text-[2.5rem]  md:text-[3rem] m-0' style={{...BoldFont,lineHeight:'1'}}>Explore the <span>Power</span> of AI!</h1>
            <p className='text-[#CECECE] lg:text-[0.8rem] md:text-[0.74rem] text-[0.6rem]  font-medium' style={MediumPoppins}>generate.one is a suite of magical AI tools. Generate original images at scale, modify photos,<br className='hidden md:block lg:block'/>expand pictures beyond their original borders, or create custom AI models.</p>
            <button className='rounded-full  border-[1px] border-[#2A2A2A] lg:w-[20rem] md:w-[15rem] text-white flex lg:h-[3.5rem] md:h-[3rem] justify-center items-center' style={MediumPoppins} >
                <span className='w-[70%] md:text-[1rem] '>
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
        </Fade>
        <div className='sec1gradient '>
          <img src={sec1img} alt="" className='rounded-t-[3.5vw] w-[68.958vw] h-[27.135vw]' />
        </div>
        
    </div>
  )
}

export default Section1