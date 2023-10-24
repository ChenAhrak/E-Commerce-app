import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import Remove_Icon from '../Assets/cart_cross_icon.png'

export default function CartItems() {
    const { all_product, cartItems, removeFromCart, getTotalsItemsAmount } = useContext(ShopContext);

    const cartItemsDisplay = () => {
        return all_product ? (
            all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div>
                            <div className="cart-items-format cart-items-format-main ">
                                <img className="cart-items-product-icon" src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.new_price}</p>
                                <button className='cart-items-quantity'>{cartItems[item.id]}</button>
                                <p>${item.new_price * cartItems[item.id]}</p>
                                <img className="cart-items-remove-icon" onClick={() => removeFromCart(item.id)} src={Remove_Icon} alt="remove" />
                            </div>

                        </div>
                    )
                }
                else {
                    return null;
                }
            })
        ) :
            (
                <p>No products available.</p>
            )
    }



    return (
        <div className='cart-items'>
            <div className="cart-items-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {cartItemsDisplay()}
            <hr />
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-items-total-items">

                            <p>Subtotal</p>
                            <p>${getTotalsItemsAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-items">

                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-items">
                            <h3>Total</h3>
                            <h3>${getTotalsItemsAmount()}</h3>
                        </div>
                    </div>
                    <button className=''>
                        Proceed to checkout
                    </button>
                </div>
                <div className="cart-items-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cart-items-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
