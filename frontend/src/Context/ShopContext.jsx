import React, { createContext } from "react";
import All_Product from '../Components/Assets/all_product.js'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {


    return (
        <ShopContext.Provider value={{ All_Product }}>
            {props.children}
        </ShopContext.Provider>
    )
}