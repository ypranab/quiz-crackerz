import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/quiz'>Home</Link>
                <Link to='/quiz'>Quiz</Link>
                <Link to='/stats'>Stats</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
            <div className='header'>
                <h2>Build a Quiz App Using React </h2>
                <h4 className='container'>
                    When the user clicks a quiz, should show correct or wrong.
                    If the user gets the question correct, it should increment their score
                    When the user gets to the end of the quiz, their total score should be shown
                </h4>
            </div>
        </div>

    );
};

export default Header;