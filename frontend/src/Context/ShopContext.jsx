import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product.js'
// import p1_img from "../Components/Assets/product_1.png";
// import p2_img from "../Components/Assets/product_2.png";
// import p3_img from "../Components/Assets/product_3.png";
// import p4_img from "../Components/Assets/product_4.png";
// import p5_img from "../Components/Assets/product_5.png";
// import p6_img from "../Components/Assets/product_6.png";
// import p7_img from "../Components/Assets/product_7.png";
// import p8_img from "../Components/Assets/product_8.png";
// import p9_img from "../Components/Assets/product_9.png";
// import p10_img from "../Components/Assets/product_10.png";
// import p11_img from "../Components/Assets/product_11.png";
// import p12_img from "../Components/Assets/product_12.png";
// import p13_img from "../Components/Assets/product_13.png";
// import p14_img from "../Components/Assets/product_14.png";
// import p15_img from "../Components/Assets/product_15.png";
// import p16_img from "../Components/Assets/product_16.png";
// import p17_img from "../Components/Assets/product_17.png";
// import p18_img from "../Components/Assets/product_18.png";
// import p19_img from "../Components/Assets/product_19.png";
// import p20_img from "../Components/Assets/product_20.png";
// import p21_img from "../Components/Assets/product_21.png";
// import p22_img from "../Components/Assets/product_22.png";
// import p23_img from "../Components/Assets/product_23.png";
// import p24_img from "../Components/Assets/product_24.png";
// import p25_img from "../Components/Assets/product_25.png";
// import p26_img from "../Components/Assets/product_26.png";
// import p27_img from "../Components/Assets/product_27.png";
// import p28_img from "../Components/Assets/product_28.png";
// import p29_img from "../Components/Assets/product_29.png";
// import p30_img from "../Components/Assets/product_30.png";
// import p31_img from "../Components/Assets/product_31.png";
// import p32_img from "../Components/Assets/product_32.png";
// import p33_img from "../Components/Assets/product_33.png";
// import p34_img from "../Components/Assets/product_34.png";
// import p35_img from "../Components/Assets/product_35.png";
// import p36_img from "../Components/Assets/product_36.png";


export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

   
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
        <ShopContext.Provider value={{ all_product, cartItems, addToCart, removeFromCart, getTotalsItemsAmount,numberInCart }}>
            {props.children}
        </ShopContext.Provider>
    )
}