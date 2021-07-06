import React from 'react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import './Works.css'

const Work = ({data,index}) => {
    // const [mobile, setMobile] = useState('')
    let mobile = useMediaQuery({maxWidth:767});
    console.log(mobile)
    return (
        <div className="work" key={index}>
            <div className="col-1">
                <img src={data.image}/>
            </div>
            <div className="col-2">
                <h3>{data.title}</h3>
                <span className="year-button">{data.year}</span><span className="tech">{mobile ? (data.tech[0].text).slice(0,15):(data.tech[0].text)}{mobile&&('...')}</span>
                <p>
                    {data.description}<br />
                    <a href={data.demo} className="demo-button">Demo</a>&nbsp;&nbsp;&nbsp;
                    <a href={data.code} className="code-button">Code</a>
                </p>
            </div>
        </div>
    )
}

export default Work
