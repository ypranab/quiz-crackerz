import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizesCat from '../QuizesCat/QuizesCat';

const Quiz = () => {
    const quizes = useLoaderData();
    const { data } = quizes;
    //console.log(data);
    return (
        <div className='d-flex gap-5 justify-center'>
            {
                data.map(quiz => <QuizesCat
                    key={quiz.id}
                    quiz={quiz}
                ></QuizesCat>)
            }
        </div>
    );
};

export default Quiz;