import React from 'react'
import './Hero.css'
import Hand_Icon from '../Assets/hand_icon.png'
import Hero_Img from '../Assets/hero_image.png'
import Arrow from '../Assets/arrow.png'
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={Hand_Icon} alt="hand-icon" />
        </div>
        <p>collctions </p>
        <p>for evreyone</p>
        <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <img src={Arrow} alt="arrow" />

        </div>
      </div>

      <div className="hero-right">
        <img src={Hero_Img} alt="hero-img" />
      </div>
    </div>
  )
}
