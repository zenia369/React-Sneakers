import React from "react";
import './Header.css'

import {Link, useLocation} from 'react-router-dom';

const Header = props => {
    const {pathname: path} = useLocation();

    return (
        <header>
            <Link to='/'>
                <div className="headerLeft">
                        <img width={40} height={40} src="/img/logo.png" alt='shoes' />
                        <div className="headerLeft-info">
                            <h3>React Sneakes</h3>
                            <p>Магазин коросівок</p>
                        </div>
                </div>
            </Link>
            <ul className="headerRight">
                <li onClick={props.onClickOpenCart}>
                    <img width={18} height={18} src="/img/shops.svg" alt='shoes' />
                    <span>{props.price} грн.</span>
                </li>
                <li className={'/favorites' === path ? 'active-link' : ''}>
                    <Link to='/favorites'>
                        <img width={18} height={18} src="/img/heart.svg" alt="favorite items" />
                    </Link>
                </li>
                <li className={'/order' === path ? 'active-link' : ''}>
                    <Link to='/order'>
                        <img width={18} height={18} src="/img/user.svg" alt='shoes' />
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header