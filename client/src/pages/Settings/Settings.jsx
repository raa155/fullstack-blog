import React from 'react'
import './Settings.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="updateTitle">Update your Account</span>
                    <span className="deleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Roman' />
                    <label>Email</label>
                    <input type="email" placeholder='roman.a.abad@gmail.com' />
                    <label>Password</label>
                    <input type="password" placeholder='**********' />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Settings