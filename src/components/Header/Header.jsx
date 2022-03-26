import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return (
        <>
            <header className='header'>
                <div className='wrapper-left'>
                    <Link to={"/"}><h1>Sneakers</h1></Link>
                    <nav>
                        <NavLink to={"/men"}>Men</NavLink>
                        <NavLink to={"/women"}>Women</NavLink>
                    </nav>
                </div>
                <div className='wrapper-right'>
                    <Link to={"/cart"}>Cart</Link>
                    <Link to={"/profile"}>Profile</Link>
                </div>
            </header>
        </>
    )
}

export default Header