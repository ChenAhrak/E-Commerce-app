import React from 'react'
import "./Navbar.css"
import Logo from "../Assets/logo.png"
import CartLogo from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
export const Navbar = () => {

    const [menu, setMenu] = React.useState("shop")

    return (
        <div className='navbar'>
            <div className='nav-logo-title'>
                <img src={Logo} alt="shopper-logo" className="nav-logo" />
                <p className="nav-title">SHOPPER</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")} ><Link style={{ textDecoration: 'none' }} to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => setMenu("men")} ><Link style={{ textDecoration: 'none' }} to="/men">Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("women")} ><Link style={{ textDecoration: 'none' }} to="/women">Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("kids")} ><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"><button className="nav-login">Login</button></Link>
                <Link to="/cart"><img src={CartLogo} alt="cart_logo" className="nav-cart" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}
