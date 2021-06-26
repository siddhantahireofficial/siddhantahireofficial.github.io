import React from 'react'
import { data } from '../../../Data'
import Post from '../Post/Post'
import './RecentPosts.css'
import './RecentPosts2.css'

const RecentPosts = ({blog}) => {
    return (
        <div className={!blog ? "RecentPosts" : "RecentPosts2"}>
            <div className="RecentPostContainer container">
            <div className="viewAll">
                {!blog&&
                    <>
                    <span>Recent Posts</span>
                    <span>View all</span>
                    </>
                }
            </div>
                <Post data={data.Posts} blog={blog} className="post" />
            </div>
        </div>
    )
}

export default RecentPosts
