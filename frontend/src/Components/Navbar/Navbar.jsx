import React from 'react'
import "./Navbar.css"
import Logo from "../Assets/logo.png"
import CartLogo from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

    const [menu, setMenu] = React.useState("shop")
    const { numberInCart,isUserLoggedIn,userStatus,removeAllFromCart } = React.useContext(ShopContext);

    const loginButton = () => {
        if (isUserLoggedIn) {
            return (
                <Link to="/"><button onClick={() => {
                    userStatus()
                    setMenu("shop")
                    removeAllFromCart()
                                     } } class="nav-login">Logout</button></Link>
            )
        }
        else {
            return (
                <Link to="/signup"><button onClick={() => setMenu("signUp")} class="nav-login">Login</button></Link>
            )
        }
    }

    return (
        <div class='navbar'>
            <Link to={'/'} style={{ textDecoration: 'none' }}><div onClick={() => setMenu("shop")} class='nav-logo-title'>
                <img src={Logo} alt="shopper-logo" class="nav-logo" />
                <p class="nav-title">SHOPPER</p>
            </div></Link>

            <ul class='nav-menu'>
                <li onClick={() => setMenu("shop")} ><Link style={{ textDecoration: 'none' }} to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => setMenu("men")} ><Link style={{ textDecoration: 'none' }} to="/men">Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("women")} ><Link style={{ textDecoration: 'none' }} to="/women">Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("kids")} ><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div class='nav-login-cart'>
                {loginButton()}
                <Link to="/cart"><img onClick={() => setMenu("cart")} src={CartLogo} alt="cart_logo" class="nav-cart" /></Link>
                <div class="nav-cart-count">{numberInCart()}</div>
            </div>
        </div>
    )
}
