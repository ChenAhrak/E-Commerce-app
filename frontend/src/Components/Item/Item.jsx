import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img src={props.image} alt="item-img" /></Link>
      <div className="item-name">
        {props.name}
      </div>
      <div className="item-prices">
        <div className="item-new-price">
          ${props.new_price}
        </div>
        <div className="item-old-price">
          ${props.old_price}
        </div>
      </div>
    </div>


  )
}
