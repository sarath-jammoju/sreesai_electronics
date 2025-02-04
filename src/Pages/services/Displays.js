import React from 'react'
import Carousel from '../../components/DisplayComponent/Carosuel'
import DisplayProducts from '../../components/DisplayComponent/DisplayProducts'
import DisplayDialogBox from '../../components/DisplayComponent/DisplayDialogBox'
import displayImg from '../../assets/DisplaysAssests/displaySystem.webp'

const Displays = () => {
  return (
    <>
    
     
     <img src ={displayImg} alt='Display Hero Section' className='HeroSection-img' />

    
     
    
      <Carousel/>
      <DisplayProducts/>
      <DisplayDialogBox/>
    </>
  )
}

export default Displays
