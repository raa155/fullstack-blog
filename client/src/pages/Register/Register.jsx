import React from 'react'
import './Register.scss'
import Topbar from '../../components/Topbar/Topbar'
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <Topbar/>
            <div className='register'>
            <form className="registerForm">
                <span>Register</span>
                <label>Username</label>
                <input type="text" placeholder='Enter your username' />
                <label>Email</label>
                <input type="text" placeholder='Enter your email' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
                <button className="registerButton">
                    Register
                </button>
            </form>
            <button className="registerLoginButton">
                <Link className='link' to="/login">Login</Link>
            </button>
        </div>
        </>
    )
}

export default Register