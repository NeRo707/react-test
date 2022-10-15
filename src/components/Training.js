import React from 'react'
import {Link} from 'react-router-dom'
import './TrainingStyles.css'
 import Lift1 from '../assets/200.gif'
import Lift2 from '../assets/lifting-heavy.gif'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>

                    <img  src={Lift1} className='img' alt='' />

                </div>
                <div className='image-stack bottom'>

                    <img src={Lift2} className='img' alt='' />

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Training
