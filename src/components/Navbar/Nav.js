import React, { useEffect, useRef, useState } from 'react'
import { FaBlogger } from 'react-icons/fa'
import { MdContactMail } from 'react-icons/md'
import { IoMdGitBranch } from 'react-icons/io'
import { Link, withRouter } from 'react-router-dom'
import './Nav.css'
import { FcHome } from 'react-icons/fc'
import { useOutsideAlerter } from '../../utils'

const Nav = ({ history }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const onHamburgerClick = () => {
    setOpen(!open)
  }
  useEffect(() => {
    setActive(history.location.pathname)
  })
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, open, onHamburgerClick)

  return (
    <nav className="NavContainer" ref={wrapperRef}>
      <div className={`hamburger ${open && 'open'}`} onClick={onHamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${open && 'open'}`}>
        <li>
          <Link
            className={`${active == '/' && 'active'}`}
            to="/"
            onClick={onHamburgerClick}
          >
            <div>
              <FcHome />
            </div>
            &nbsp; Home
          </Link>
        </li>
        <li>
          <Link
            className={`${active == '/Work' && 'active'}`}
            to="/Work"
            onClick={onHamburgerClick}
          >
            <div>
              <IoMdGitBranch color="#4078c0" />
            </div>
            &nbsp; Work
          </Link>
        </li>
        <li>
          <Link
            className={`${active == '/Blogs' && 'active'}`}
            to="/Blogs"
            onClick={onHamburgerClick}
          >
            <div>
              <FaBlogger color="#FC4F08" />
            </div>
            &nbsp; Blogs
          </Link>
        </li>
        <li>
          <Link
            className={`${active == '/Contact' && 'active'}`}
            to="/Contact"
            onClick={onHamburgerClick}
          >
            <div>
              <MdContactMail color="#1D71F2" />
            </div>
            &nbsp; Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Nav)
