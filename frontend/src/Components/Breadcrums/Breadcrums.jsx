import React from 'react'
import './Breadcrums.css'
import Arrow_Icon from '../Assets/breadcrum_arrow.png'
export const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
        Home <img src={Arrow_Icon} alt="arrow" />
        Shop <img src={Arrow_Icon} alt="arrow" />
        {product.category} <img src={Arrow_Icon} alt="arrow" />
        {product.name}
    </div>
  )
}
