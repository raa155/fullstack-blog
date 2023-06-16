// @ts-nocheck
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router';
import './SinglePost.scss';
const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get("/posts/" + path)
            setPost(response.data)
        }
        getPost();
    },[path])
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                {post?.photo &&
                    <img src={post?.photo} alt="" />
                }
                <h1>{post?.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="author">Author: <b>{post?.username}</b></span>
                    <span className="date">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p>
                    {post.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost
