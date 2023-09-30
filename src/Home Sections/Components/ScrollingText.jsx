import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import StarIcon from '@mui/icons-material/Star';
const ScrollingText = () => {
  return (
    <div className=' text-[5.5rem]  scrolling-text-container bg-[#6507FF] py-[2rem] overflow-hidden text-white text-[3.5rem]'>
      <Marquee>
      <div>
      
      <span class='text-center icon '><StarIcon/></span><span class='font-extrabold'>  AI</span> <span class='font-style: italic'>ART!</span> <span class='font-extrabold text-outline stroke'>UNLEASH</span> <span class='font-style: italic'>YOUR</span> <span class='font-extrabold stroke'>IMAGINATION</span> <span class='font-extrabold'>WITH</span> <span class='font-weight: 700'>OUR</span> <span class='font-style: italic'>POWERFUL</span> <span>TOOL</span> <span>AND</span> <span>YOUR</span> <span class='font-extrabold stroke'>CREATIVITY</span>
      </div>
      </Marquee>
    </div>
  );
};

export default ScrollingText;
