// @ts-nocheck
import React, { useContext, useRef } from 'react'
import './Login.scss'
import Topbar from '../../components/Topbar/Topbar'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';



const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" });
        try {
            const response = await axios.post('/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value

            })
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            response.data && window.location.replace('/');
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    };
    return (
        <>
            <Topbar/>
            <div className='login'>
            <form className="loginForm" onSubmit={handleSubmit}>
                <span>Login</span>
                <label>Username</label>
                    <input
                        type="text"
                        placeholder='Enter your username:'
                        ref={userRef}
                    />
                <label>Password</label>
                    <input
                        type="password"
                        placeholder='Enter your password:'
                        ref={passwordRef}
                    />
                    <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
        </>
    )
}

export default Login
