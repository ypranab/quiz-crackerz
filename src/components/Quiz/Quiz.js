import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizesCat from '../QuizesCat/QuizesCat';

const Quiz = () => {
    const quizes = useLoaderData();
    const { data } = quizes;
    //console.log(data);
    return (
        <div>
            <div className='header'>
                <h2>Build a Quiz App Using React </h2>
                <h4 className='container'>
                    When the user clicks a quiz, should show correct or wrong.
                    If the user gets the question correct, it should increment their score
                    When the user gets to the end of the quiz, their total score should be shown
                </h4>
            </div>
            <div className='d-flex gap-5 justify-center'>
                {
                    data.map(quiz => <QuizesCat
                        key={quiz.id}
                        quiz={quiz}
                    ></QuizesCat>)
                }
            </div>
        </div>

    );
};

export default Quiz;