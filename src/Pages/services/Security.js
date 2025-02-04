import React from 'react'
import { Fragment } from 'react'
import Carousel from '../../components/SecurityComponent/Carosuel'
import SecurityProducts from '../../components/SecurityComponent/SecurityProduct'
import SecurityDialougebox from '../../components/SecurityComponent/SecurityDialogBox'
import securityImg from '../../assets/securityAssests/securitrySystem.webp'

const Security = () => {
  return (
    <Fragment>      
        <img src ={securityImg} alt='Computers Hero Section' className='HeroSection-img'/>
      
      <Carousel/>
      <SecurityProducts/>
      <SecurityDialougebox/>
   
    </Fragment>
  )
}

export default Security
