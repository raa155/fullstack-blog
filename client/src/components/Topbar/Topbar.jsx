import React, { useContext } from 'react'
import './Topbar.scss';

// Material UI Icons
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';


const Topbar = () => {

    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }
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
                        {user && <Link className="link" to="/" onClick={handleLogout}>LOGOUT</Link>}
                    </li>
                </ul>
            </div>
            <div className="topRight">

                {
                    user ? (
                        <Link to="/account">
                            <img src={user.profilePic} alt="" />
                        </Link>
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
