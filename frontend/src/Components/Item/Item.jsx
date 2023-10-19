import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="item-img" />
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
