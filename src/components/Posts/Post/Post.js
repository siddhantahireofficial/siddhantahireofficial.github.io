import React from 'react'

const Post = ({blog,data, className}) => {
    return (
        <>
        {data.map((e,i)=>(<>
            <div className={className} key={i}>
                <h3>{e.name}</h3>
                <div>
                    <span>{e.date}</span> <span></span>
                    <span>{e.tech}</span>
                </div>
                <p>
                    {e.description}
                </p>
                {blog &&
                    <div className="horizontal-line2"></div>
                }
            </div>
                </>
            ))
        }
        </>
    )
}

export default Post
