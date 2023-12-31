import React from 'react'
import { Link } from 'react-router-dom';
import './Post.scss';

const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {post.photo && (
                <img src={PF + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {
                        post.categories.map((c) => (
                            <span className="postCat">{c.name}</span>
                        ))
                    }
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <hr />
            </div>
            <p>
                {post.desc}
            </p>
        </div>
    )
}

export default Post
