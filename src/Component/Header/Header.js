import React from 'react';
import logo from '../../Images/news.png';
import './Header.css';
const Header = () => {
    return (
        <div className="news">
            <img src={logo} alt=""/>
            <nav>
            <a href="/country">Country</a>
           <a href="/details">Country Details</a>
           <a href="/science">Science</a>
            </nav>
        </div>
    );
};

export default Header;