import React from 'react'
import Carousel from '../../components/SolutionComponents/Carosuel'
import SolutionProducts from '../../components/SolutionComponents/SolutionProducts'
import SolutionDialogBox from '../../components/SolutionComponents/SoltionDialoBox'
import solutionImg from '../../assets/solutionAssets/solutionSystem.webp'

const Solutions = () => {
  return (
    <>
    
    <img src ={solutionImg} alt='Solutions Hero Section' className='HeroSection-img'/>
    
      <Carousel/>
      <SolutionProducts/>
      <SolutionDialogBox/>
    </>
  )
}

export default Solutions
