import React from 'react'
import './Topbar.scss';

// Material UI Icons
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Topbar = () => {

    const user = true;
    return (
        <div className="topBar">
            <div className="topLeft">
                <i className="fa-brands fa-square-facebook topIcon"></i>
                <i className="fa-brands fa-square-twitter topIcon"></i>
                <i className="fa-brands fa-square-pinterest topIcon"></i>
                <i className="fa-brands fa-square-instagram topIcon"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li>
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li><Link className="link" to="/">ABOUT</Link></li>
                    <li><Link className="link" to="/">CONTACT</Link></li>
                    <li><Link className="link" to="/write">WRITE</Link></li>
                    <li>
                        {user && <Link className="link" to="/">LOGOUT</Link>}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
                    ) : (
                        <ul>
                            <Link className="link topRightLink" to="/login">LOGIN</Link>
                            <Link className="link topRightLink" to="/register">REGISTER</Link>
                        </ul>
                    )
                }
                <SearchIcon className="search" />

            </div>
        </div>
    )
}

export default Topbar
