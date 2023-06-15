import React from 'react'
import './Login.scss'
import Topbar from '../../components/Topbar/Topbar'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <Topbar/>
            <div className='login'>
            <form className="loginForm">
                <span>Login</span>
                <label>Email</label>
                <input type="text" placeholder='Enter your email' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
        </>
    )
}

export default Login