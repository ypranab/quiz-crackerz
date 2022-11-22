import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/quiz'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
        </div>
    );
};

export default Header;