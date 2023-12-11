import React from 'react'
import './ProductDisplay.css';
import Star_Icon from '../Assets/star_icon.png'
import Star_Dull_Icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart,isUserLoggedIn } = React.useContext(ShopContext);
    const navigation = useNavigate();

    const userConnected = ()=>{ //Check if the User is Logged in or not
        if(isUserLoggedIn){
            addToCart(product.id)
        }
        else{
            alert('Please Login First')
            navigation('/login')
        }
    
    }

    return (
        <div className='product-display'>
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="product-img" />
                    <img src={product.image} alt="product-img" />
                    <img src={product.image} alt="product-img" />
                    <img src={product.image} alt="product-img" />
                </div>
                <div className="product-display-img">
                    <img className='product-display-main-img' src={product.image} alt="main-img" />
                </div>
            </div>

            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-star">
                    <img src={Star_Icon} alt="" />
                    <img src={Star_Icon} alt="" />
                    <img src={Star_Icon} alt="" />
                    <img src={Star_Icon} alt="" />
                    <img src={Star_Dull_Icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-display-price">
                    <div className="product-display-old-price">
                        ${product.old_price}
                    </div>
                    <div className="product-display-new-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-description">
                    Great for the office or a night out, this dress will make you feel confident and comfortable all day long.
                </div>
                <div className="product-display-size">
                    <p>Select Size</p>
                    <div className='product-display-size-list'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={userConnected}>
                    Add to Cart
                </button>
                <p className='product-display-category'><span>Category :</span> {product.category} , Hoodie , Jogging </p>
                <p className='product-display-category'><span>Tags :</span> Modern , Latest </p>
            </div>



        </div>
    )
}
