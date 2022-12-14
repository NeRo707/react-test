import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label>Your Name</label>
        <input type='text' required></input>
        <label>Email</label>
        <input type='text' required></input>
        <label>Subject</label>
        <input type='text' required></input>
        <label>Details</label>
        <textarea rows='6' placeholder='Type a short message here.'></textarea>
        <button className='btn'>Submit</button>
        
      </form>
    </div>
  )
}

export default Form
