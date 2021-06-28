import React from 'react'
import { data } from '../../Data'
import Typed from 'react-typed'
import Bounce from 'react-reveal/Bounce'
import './Intro.css'


const Intro = () => {
    return (
        <div className='IntroContainer'>
            <div className="col-1">
                <Bounce left duration={4000}>

                <h1 className="heading1">
                    {data.Introduction.heading}<br />
                    <Typed 
                        strings={[`${data.Introduction.heading2}`,`${data.Introduction.heading2}`]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        />
                </h1>
                        </Bounce>
                        <Bounce left duration={5000}>
                <p className="paragraph">
                    {data.Introduction.paragraph}
                </p>
                </Bounce>
                <Bounce left duration={6000}>
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
                </Bounce>
                <div className='resume'>
                    <Bounce bottom duration={4000}>
                    <a href="#" className="button1">Download Resume</a>
                    </Bounce>
                </div>
            </div>
            <div className="col-2">
                <Bounce top duration={3000}>
                <div className="text-align-center2">
                    <div className="image2">
                        <div className="img"></div>
                    </div>
                </div>
                </Bounce>
                <Bounce bottom duration={3000}>
                <div className="text-align-center">
                    <div className="image">
                        <img src={data.Introduction.profileImage} />
                    </div>
                </div>
                </Bounce>
            </div>
        </div>
    )
}

export default Intro
