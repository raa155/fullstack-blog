import React from 'react'
import './Posts.scss';
import Post from '../Post/Post';

const Posts = () => {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Posts