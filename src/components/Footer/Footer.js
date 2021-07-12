import React from 'react'
import { data } from '../../Data'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <ul>
                {data.footer.icons.map((e,i) => (
                      <li key={i}>{e}</li>  
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
