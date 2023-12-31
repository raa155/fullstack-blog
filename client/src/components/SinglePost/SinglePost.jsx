// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router';
import './SinglePost.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
const SinglePost = () => {
    const {user} = useContext(Context)
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get("/posts/" + path)
            setPost(response.data);
            setTitle(response.data.title);
            setDesc(response.data.desc);
        }
        getPost();
    }, [path])



    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            });
            window.location.replace('/')
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc
            });
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                {post?.photo &&
                    <img src={PF+post?.photo} alt="" />
                }
                {
                    updateMode ? <input type="text" value={title} className='singlePostTitleInput' autoFocus onChange={(e) =>setTitle(e.target.value)} /> :
                        (


                        <h1>{title}
                            {post.username === user?.username &&
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon far fa-edit" onClick={()=>{setUpdateMode(true)}}></i>
                                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                            }
                        </h1>

                        )
                }
                <div className="singlePostInfo">
                    <span className="author">Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post?.username}</b>
                        </Link>
                    </span>
                    <span className="date">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e) =>setDesc(e.target.value)} /> :  (
                    <p>
                    {desc}
                    </p>
                )}
                {
                    updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                }
            </div>
        </div>
    )
}

export default SinglePost
