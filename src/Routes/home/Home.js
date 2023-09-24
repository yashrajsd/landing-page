import React from 'react'
import Section1 from '../../Home Sections/Section1'
import Section2 from '../../Home Sections/Section2'
import VideoPlayer from '../../Home Sections/Components/VideoPlayer'
import ScrollingText from '../../Home Sections/Components/ScrollingText'
import Section3 from '../../Home Sections/Section3'
import videobg from '../../utils/video2.mp4';
import Section4 from '../../Home Sections/Section4'

const Home = () => {
  return (
    <div >
      <div className='relative'>
      <VideoPlayer video={videobg} innerShadow={true}/>
      <Section1/>
      </div>
      <Section2/>
      <ScrollingText/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default Home