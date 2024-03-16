import React from 'react'
import { data } from '../../Data'
import Typed from 'react-typed'
import Bounce from 'react-reveal/Bounce'
import ResumePDF from '../../docs/Full_Stack_Developer.pdf'
import './Intro.css'

const Intro = () => {
  return (
    <div className="IntroContainer">
      <div className="col-1">
        <Bounce left duration={4000}>
          <h1 className="heading1">
            {data.Introduction.heading}
            <br />
            {/* <Typed 
                        strings={data.Introduction.heading2}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        /> */}
          </h1>
        </Bounce>
        <Bounce left duration={5000}>
          <p className="paragraph">{data.Introduction.paragraph}</p>
        </Bounce>
        <Bounce left duration={6000}>
          <div className="skills">
            <div className="title">
              <h4>Skills :</h4>
            </div>

            <div className="list">
              {data.Introduction.skills.map((s, i) => (
                <Bounce
                  key={i}
                  top={i % 2 === 0 ? true : false}
                  bottom={i % 2 != 0 ? true : false}
                  duration={i * 200 + 5000}
                >
                  <div className="tooltip" key={i}>
                    {s.icon}
                    <span className="tooltiptext">{s.text}</span>
                  </div>
                </Bounce>
              ))}
            </div>
          </div>
        </Bounce>
        <div className="resume">
          <Bounce bottom duration={4000}>
            <a href={ResumePDF} className="button1" target='__blank'>
              Download Resume
            </a>
          </Bounce>
        </div>
        <p className="status">
          Current Status: Working in{' '}
          <a
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjb0OHGooWDAxVSTmwGHbAdCDMQFnoECBkQAQ&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fenpointein&usg=AOvVaw3Vx1nKuX_xxrthV_Bi4Ycv&opi=89978449"
            target="_blank"
          >
            enpointe.io
          </a>
        </p>
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
