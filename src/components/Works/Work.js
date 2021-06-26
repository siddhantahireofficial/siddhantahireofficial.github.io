import React from 'react'
import './Works.css'

const Work = ({data,index}) => {
    return (
        <div className="work" key={index}>
            <div className="col-1">
                <img src={data.image}/>
            </div>
            <div className="col-2">
                <h3>{data.title}</h3>
                <span className="year-button">{data.year}</span><span>{data.tech}</span>
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default Work
