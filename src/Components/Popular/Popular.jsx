import React from 'react'
import './Popular.css'
import Data_Product from '../Assets/data.js'
import { Item } from '../Item/Item'

export const Popular = () => {

    const pop = Data_Product.map((item) => {
        return (
            <Item
                key={item.id}
                {...item}

            />
        )

    });

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN </h1>
            <hr />
            <div className="popular-items">
                {pop}
            </div>
        </div>
    )
}
