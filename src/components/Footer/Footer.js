import React from 'react'
import { Redirect } from 'react-router'
import { data } from '../../Data'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <ul>
                {data.footer.icons.map((e,i) => (
                      <a key={i} href={e.link} target="_blank">
                          <li>
                          {e.icon}
                        </li>  
                          </a>
                    ))}
                </ul>
                <span>
                    {data.footer.text}
                </span>
            </div>
        </div>
    )
}

export default Footer
