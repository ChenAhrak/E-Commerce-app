import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Dropdown_Icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'
import { ShopContextProvider } from '../Context/ShopContext'




export const ShopCategory = (props) => {

  const { All_Product } = useContext(ShopContext);
  
  const categoryId = () => {
   return All_Product ? (
      All_Product.map((item) => {
        if (item.category === props.category) {
          return (
            <Item
              key={item.id}
              {...item}
            />
          )
        } else {
          return null;
        }
      })
    ) : (
      <p>No products available.</p>
    )
  }




  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="banner" />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={Dropdown_Icon} alt="drop-down" />
        </div>
      </div>
        <div className="shop-category-products">
          {categoryId()}
        </div>
        <div className="shop-category-loadmore">
          Explore More
        </div>
      </div>

  )

}
