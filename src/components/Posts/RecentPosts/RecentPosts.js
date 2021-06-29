import React, { useState } from 'react'
import { data } from '../../../Data'
import Post from '../Post/Post'
import { useMediaQuery } from 'react-responsive'
import './RecentPosts.css'
import './RecentPosts2.css'

const RecentPosts = ({blog}) => {
    const [viewAll, setViewAll] = useState(true);
    const [RecentPosts, setRecentPosts] = useState(data.Posts.slice(0,2));
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const onViewAll = () => {
        const posts = data.Posts.slice(0,!viewAll ? 2 : data.Posts.length)
        setRecentPosts(posts);
        setViewAll(!viewAll);
    }
    return (
        <div className={!blog ? `RecentPosts ${!viewAll&& 'expand'}` : "RecentPosts2"}>
            <div className="RecentPostContainer container">
            <div className="viewAll">
                {!blog&&
                    <>
                    <span>Recent Posts</span>
                    <span onClick={onViewAll}>{viewAll ? 'View All' : 'Close All'}</span>
                    </>
                }
            </div>
                <Post data={blog ? data.Posts :RecentPosts} blog={blog} className="post" />
                {!blog && isTabletOrMobile &&
                    <h3 onClick={onViewAll}>{viewAll ? 'View All' : 'Close All'}</h3>}
            </div>
        </div>
    )
}

export default RecentPosts
