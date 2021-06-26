import React from 'react'
import { data } from '../../Data'
import Work from './Work'
import './Works.css'

const Works = ({works}) => {
    console.log(works)
    return (
            <div className="container">

            <div className={`works ${works&& 'worksbig'}`}>
            {!works &&<h4>Featured Works</h4>
            }
                {data.Works.map((v,i) => (
                    <>
                    <Work data={v} index={i}/>
                    <div className="horizontal-line"></div>
                    </>
                ))}
            </div>
                </div>
    )
}

export default Works
