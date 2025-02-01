import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={assets.logo} alt="" /> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore mollitia numquam in incidunt voluptate dignissimos. Modi excepturi numquam fuga rerum unde, natus animi expedita aut illo odio, eius quos!</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />

            </div>
            </div>
            <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>
            <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9480533114</li>
                <li>ContactDinaz@tomato.com</li>
            </ul>
            </div>
        </div>    
        <hr/>   
        <p className='footer-copy-right'>Copyright 2024 Tomato.com - All Right Reserved</p>

    </div>
  )
}

export default Footer
