import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './FormStyles.css'

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      
     'service_y1y272j',
     'template_8fjtzxq',
      form.current,
     'QQ5FIQOY2HYvdK9Ku')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });



  };


  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type='text' name='user_name' required></input>
        <label>Email</label>
        <input type='email' name='user_email' required></input>
        <label>Subject</label>
        <input type='text' name='user_subject'></input>
        <label>Details</label>
        <textarea name='message' rows='6' placeholder='Type a short message here.'></textarea>
        <button className='btn' type='submit' value='send'>Submit</button>
        
      </form>
    </div>
  )
}


export default Form
