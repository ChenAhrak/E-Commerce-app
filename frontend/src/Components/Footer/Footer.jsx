import React from 'react'
import './Footer.css'
import Logo_Big from '../Assets/logo_big.png'
import Instagram_Icon from '../Assets/instagram_icon.png'
import Whatsapp_Icon from '../Assets/whatsapp_icon.png'
import Pintester_Icon from '../Assets/pintester_icon.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo">
                <img src={Logo_Big} alt="logo" />
                <p>SHOPPER</p>
            </div>

            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social">
                <img src={Instagram_Icon} alt="instagram" />
                <img src={Pintester_Icon} alt="pintester" />
                <img src={Whatsapp_Icon} alt="whatssapp" />
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    )
}
