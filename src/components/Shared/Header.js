import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    const imageLogo = require('../../img/logo.png').default
    return (
        <header className="page-header pad-top-4">
            <article className="container">
                <article className="grid grid-2">
                    <a href="index.html" className="logo text-left"><img src={imageLogo} alt="Flont." /></a>
                    <article className="text-right icons">
                        <ul className="your-products flex text-right">
                            <li className="hidden-on-mobile-view show-on-webview"><Link className="font-bold" id="shop-submenu" to="/products">Shop<i
                                className="fas fa-chevron-down shop-arrow"></i></Link>
                                <ul className="hidden submenu shop-submenu-options" id="shop-submenu-options">
                                    <li><a href="#">Top Wear</a></li>
                                    <li><a href="#">Bottom Wear</a></li>
                                </ul>
                            </li>
                            <li className="hidden-on-mobile-view show-on-webview"><Link className="font-bold" to="/about">About</Link></li>
                            <li className="hidden-on-mobile-view show-on-webview"><a className="font-bold" href="#">Contact</a></li>
                            <li className="hidden-on-mobile-view show-on-webview"><input className="search-text" type="text"
                                placeholder="Search..." /><i className="fas fa-search search-icon" ></i></li>
                            <li><a className="pad-left-10" href="#"><i className="fa-icon far fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa-icon fas fa-shopping-basket"></i></a></li>
                            <li className="hide-on-webview show-on-tablet"><a id="nav-icon" href="#"><i className="fa-icon fas fa-bars"></i></a></li>
                        </ul>
                        <nav aria-label="Primary" id="nav-options" className="navigation hidden">
                            <ul className="menu">
                                <li><input className="search-text" type="text" placeholder="Search..." /><i
                                    className="fas fa-search search-icon"></i></li>
                                <li><a className="font-bold" href="#">Shop<i className="fas fa-chevron-down shop-arrow"></i></a>
                                    <ul className="submenu">
                                        <li><a href="#">Top Wear</a></li>
                                        <li><a href="#">Bottom Wear</a></li>
                                    </ul>
                                </li>
                                <li><Link className="font-bold" to="/about">About</Link></li>
                                <li><a className="font-bold" href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </article>
                </article>
            </article>
        </header>
    )
}

export default Header