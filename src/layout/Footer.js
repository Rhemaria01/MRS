import React from 'react'
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle
} from 'react-icons/ai'
const Footer = () => {
  return (

    
      
      <div
        fluid
        tag="footer"
        className="sticky-bottom footer text-uppercase"
        >
        
        <a href='https://www.linkedin.com/in/reenav-hemaria-783758202/'><AiFillLinkedin className='social_icon' /></a>
        <a href='https://www.instagram.com/r_e_e_9/'><AiFillInstagram className='social_icon' /></a>
        <a href='https://github.com/reenav01'><AiFillGithub className='social_icon' /></a>
        <a href='https://twitter.com/HemariaReenav'><AiFillTwitterCircle className='social_icon' /></a>
        <a href='https://www.reddit.com/u/ariameh_naveer?utm_medium=android_app&utm_source=share'><AiFillRedditCircle className='social_icon' /></a>
         
        
        <span className='footer_text float-end'>&copy; 2020 - All Rights Reserved</span>
        
        </div>
    
    

  )
}

export default Footer