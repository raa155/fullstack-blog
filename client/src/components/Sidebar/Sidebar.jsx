// @ts-nocheck
import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import './Sidebar.scss'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Sidebar = () => {
    const { user } = useContext(Context);

    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () =>
        {
            const response = await axios.get('/categories');
            setCats(response.data);
        }
        getCats();
    }, []);


    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                {user ? (<img src={user.profilePic} alt="" />) : (
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
                )
            }
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum iste voluptate voluptatibus molestias? Nulla iste expedita eos repellendus aut explicabo pariatur voluptas harum dicta, dolores eius cupiditate sint cum!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link className='link' to={`/?cat=${c.name}`}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-square-pinterest"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
