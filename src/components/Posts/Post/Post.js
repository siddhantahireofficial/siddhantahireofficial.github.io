import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'



const Post = ({blog, data, className}) => {
    return (
        <>
        {data.map((e,i)=>(<>
        {/* <Pulse left={i%2 === 0 ? true : false} right={i%2 != 0 ? true : false}> */}
            <div className={className} key={i}>
                <h3>{e.name}</h3>
                <div>
                    <span>{e.date}</span> <span></span>
                    <span>{e.tech}</span>
                </div>
                <p>
                    {e.description} <a href={e.link}>Read More....</a>
                </p>
                {blog &&
                    <div className="horizontal-line2"></div>
                }
            </div>
        {/* </Pulse> */}
                </>
            ))
        }
        </>
    )
}

export default Post
