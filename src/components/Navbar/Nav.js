import React, { useState } from 'react'
import { AiFillMail } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';
import { FcContacts } from 'react-icons/fc';
import { MdContactMail } from 'react-icons/md';

import { IoIosContacts, IoIosMailOpen, IoMdCode, IoMdCodeWorking, IoMdContact, IoMdContacts, IoMdGitBranch, IoMdMailOpen } from 'react-icons/io';
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {

    const [open, setOpen] = useState(false);

    const onHamburgerClick = () => {
        setOpen(!open);
    }

    return (
        <nav className="NavContainer">
            <div className={`hamburger ${open && "open"}`} onClick={onHamburgerClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-links ${open && 'open'}`}>
                <li><Link to="/work" style={{width:'100%'}}><span><IoMdGitBranch color="#4078c0"/></span>&nbsp; Works</Link></li>
                <li><Link to="/Blogs"><span><FaBlogger color="#FC4F08" /></span>&nbsp; Blogs</Link></li>
                <li><Link to="/Contact"><span><MdContactMail color="#1D71F2"  /></span>&nbsp; Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
