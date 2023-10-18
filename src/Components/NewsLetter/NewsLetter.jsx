import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
    return (
        <div className='news-letter'>
            <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div className="subscribe">
                <input type="email" placeholder='Your Email id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
