import React from 'react'
import Intro from '../components/Introduction/Intro'
import RecentPosts from '../components/Posts/RecentPosts/RecentPosts'
import Works from '../components/Works/Works'

const Home = () => {
    return (
        <>
        <div className="container">
            <Intro />
        </div>
        <RecentPosts/>
        <Works />
        </>
    )
}

export default Home
