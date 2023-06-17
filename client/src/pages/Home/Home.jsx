import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Home.scss';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
const Home = () => {
    //Fetch Posts
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();



    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("/posts"+search);
            setPosts(response.data)
        }
        fetchPosts();
    }, [search])


    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </>
    )
}

export default Home
