import React from 'react'
import './Header.scss';
const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">OPEN</span>
                <span className="headerTitleLg">BOOK</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1544396969-ccd46637e22f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="" />
        </div>
    )
}

export default Header