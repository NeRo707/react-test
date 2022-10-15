import React from 'react'
import './VideoStyles.css'
import {Link} from 'react-router-dom'
import mommyVideo from '../assets/mommy.mp4'

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay  loop muted id='video'>
      <source src={mommyVideo} type='video/mp4'/>
      </video>
      <div className='content'>
        <h1>PROJECT-M</h1>
        <p>Strive for greatness.</p>
      <div>
      <Link to='/training' className='btn'>Training</Link>
      <Link to='/contact' className='btn btn-light'>Launch</Link>
      </div>
      </div>
    </div>
  )
}

export default Video
