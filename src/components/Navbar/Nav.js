import React from 'react'
import {GiHamburgerMenu} from 'react-icons/all'
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <nav className="NavContainer">
            <div className="hamburger">
                <GiHamburgerMenu/>
            </div>
            <ul className="nav-links">
                <li><Link to="/work">Works</Link></li>
                <li><Link to="/Blogs">Blogs</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
