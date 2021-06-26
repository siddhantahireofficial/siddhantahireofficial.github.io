import React from 'react'
import { data } from '../../Data'
import './Intro.css'


const Intro = () => {
    return (
        <div className='IntroContainer'>
            <div className="col-1">
                <h1 className="heading1">
                    {data.Introduction.heading}<br />
                    {data.Introduction.heading2}
                </h1>
                <p className="paragraph">
                    {data.Introduction.paragraph}
                </p>
                <div className="skills">
                <div className="title">
                    <h4>Skills :</h4>
                </div>
                <div className="list">
                {
                    data.Introduction.skills.map((s,i)=><span key={i}>{s}</span>)
                }
                </div>   
                </div>
                <div className='resume'>
                    <a href="#" className="button1">Download Resume</a>
                </div>
            </div>
            <div className="col-2">
                <div className="text-align-center2">
                    <div className="image2">
                        <div className="img"></div>
                    </div>
                </div>
                <div className="text-align-center">
                    <div className="image">
                        <img src={data.Introduction.profileImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
