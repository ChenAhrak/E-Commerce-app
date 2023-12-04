import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product.js'


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
//Check if the User is Logged in or not
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
    const userStatus = () => {
        setIsUserLoggedIn(prev => !prev)
    }
   
    // const [all_product, set_All_Product] = React.useState("")

    //     React.useEffect(()=>{
    //         fetch('http://localhost:3002/products')
    //         .then(res => res.json())
    //         .then(data =>{
    //             set_All_Product(data)
    //         })
    //     },[])
        
        const getDefaultCart = () => {
            let cart = {};
            for (let i = 1; i < all_product.length + 1; i++) {
                cart[i] = 0;
            }
            return cart;
        }

    const [cartItems, setCartItems] = React.useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => {
            return { ...prev, [itemId]: prev[itemId] + 1 };
        });
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            let cart = { ...prev };
            if (cart[itemId] > 0) {
                cart[itemId] = cart[itemId] - 1;
            }
            return cart;
        });
    }

    const getTotalsItemsAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let currentItem = all_product.find((product) => product.id === Number(item));
                totalAmount += cartItems[currentItem.id] * currentItem.new_price;
            }
        }
        return totalAmount;
    }

    const numberInCart = () => {
        let iconNumber = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                iconNumber += cartItems[item];
            }
        }
        return iconNumber;
    }

    return (
        <ShopContext.Provider value={{ all_product, cartItems, addToCart, removeFromCart, getTotalsItemsAmount,numberInCart,isUserLoggedIn,userStatus }}>
            {props.children}
        </ShopContext.Provider>
    )
}