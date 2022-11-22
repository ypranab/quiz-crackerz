import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to='/quiz'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
            <Link to='/stats'>Stats</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    );
};

export default Header;