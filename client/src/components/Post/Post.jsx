import React from 'react'
import './Post.scss';

const Post = () => {
    return (
        <div className="post">
            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Post Title</span>
                <span className="postDate">1 hour ago</span>
                <hr />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto praesentium maxime, sunt repudiandae nam minima quia minus! Deserunt, ad deleniti. Molestiae quos, ab aut sunt molestias ut eius nisi! Voluptatem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto praesentium maxime, sunt repudiandae nam minima quia minus! Deserunt, ad deleniti. Molestiae quos, ab aut sunt molestias ut eius nisi! Voluptatem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto praesentium maxime, sunt repudiandae nam minima quia minus! Deserunt, ad deleniti. Molestiae quos, ab aut sunt molestias ut eius nisi! Voluptatem.
            </p>
        </div>
    )
}

export default Post