import React from 'react'
import RecentPosts from '../components/Posts/RecentPosts/RecentPosts'
import Title from '../components/Title/Title'

const Blog = () => {
    return (
        <div>
            <Title title="Blog"/>
            <RecentPosts blog={true}/>
        </div>
    )
}

export default Blog
