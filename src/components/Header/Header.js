import React from 'react';
import './Header.css'

// header compoment
const Header = () => {
    return (
        <div>
            <h1>Welcome to the World Rest Countries</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/country">Countries</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;