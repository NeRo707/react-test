import React, { Component } from 'react'
import './HeroImageStyles.css'
import mommyVid from '../assets/mommy - Copy.mp4'
class HeroImage extends Component {
  render() {
    return (
      <div className='hero-img'>
        <video id='vid' autoPlay  loop muted>
          <source source src={mommyVid} type='video/mp4'/>
        </video>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImage
