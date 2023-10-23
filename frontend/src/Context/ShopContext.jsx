import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product.js'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {


    return (
        <ShopContext.Provider value={{ all_product }}>
            {props.children}
        </ShopContext.Provider>
    )
}