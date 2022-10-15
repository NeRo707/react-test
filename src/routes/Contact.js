import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading='CONTACT' text='Contact NERO'></HeroImage>  
      <Form/>
      <Footer/>


    </div>
  )
}

export default Contact
