import React from 'react'
import { data } from '../../Data'
import Work from './Work'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
import './Works.css'

const Works = ({works}) => {
    console.log(works)
    return (
            <div className="container">

            <div className={`works ${!works ? 'worksbig' : 'works'}`}>
            {!works &&<h4>Featured Works</h4>
            }
                {data.Works.map((v,i) => (
                    // <Pulse left={i%2 === 0 ? true : false} right={i%2 != 0 ? true : false}>
                    <>
                    <Work data={v} index={i}/>
                    <div className="horizontal-line"></div>
                    </>
                    // </Pulse>
                    
                ))}
            </div>
                </div>
    )
}

export default Works
