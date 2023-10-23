import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data.js'
import { Item } from '../Item/Item'
export const RelatedProducts = () => {
  return (
    <div className='related-products'>
            <h1>Related Products</h1>
            <hr />
            <div className="related-products-item">
                {data_product.map((item) => {
                    return <Item 
                                key={item.id}
                                {...item}
                            />
                })}
            
                </div>    
    </div>
  )
}
