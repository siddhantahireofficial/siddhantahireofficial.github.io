import React from 'react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import './Works.css'

const Work = ({data,index}) => {
    const [modal, setModal] = useState('none');
    let mobile = useMediaQuery({maxWidth:767});
    const onClickImage = () => {
        setModal('block');
    }
    const close = () => {
        setModal('none');
    }
    return (
        <div className="work" key={index}>
            <div className="col-1">
                <img src={data.image} onClick={onClickImage}/>
                <div className="modal" style={{display:modal}}>
                    <span className="close" onClick={close}>&times;</span>
                    <img className="modal-content" src={data.image}/>
                    <div className="caption">{data.title}</div>
                </div>
            </div>
            <div className="col-2">
                <h3>{data.title}</h3>
                <span className="year-button">{data.year}</span><span className="tech">{mobile ? (data.tech[0].text).slice(0,15):(data.tech[0].text)}{mobile&&('...')}</span>
                <p>
                    {data.description}<br />
                    <a href={data.demo} target="_blank" className="demo-button">Demo</a>&nbsp;&nbsp;&nbsp;
                    {data.code && <a href={data.code} className="code-button">Code</a>}
                </p>
            </div>
        </div>
    )
}

export default Work
