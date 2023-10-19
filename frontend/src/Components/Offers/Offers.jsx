import React from 'react'
import './Offers.css'
import ExImg from '../Assets/exclusive_image.png'

export const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">

                <h1> Exclusive </h1>
                <h1> Offers For You </h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <div className="exlusive-btn">
                   Check now
                </div>
            </div>
            <div className="offers-right">
                <img src={ExImg} alt="exclusive" />
            </div>
        </div>
    )
}
