import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: 'white', marginRight:'2rem'}}/>
                    <div>
                        <p>123 T St.</p>
                        <p>Planet, Uranus.</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: 'white', marginRight:'2rem'}}/>123-123-123</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: 'white', marginRight:'2rem'}}/>vinmexomarmokles@gmail.sus</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>"Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum "</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: 'white', marginRight:'1rem'}}></FaFacebook>
                    <FaTwitter size={30} style={{color: 'white', marginRight:'1rem'}}></FaTwitter>
                    <FaLinkedin size={30} style={{color: 'white', marginRight:'1rem'}}></FaLinkedin>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
