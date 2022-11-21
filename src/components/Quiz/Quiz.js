import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizes = useLoaderData();
    console.log(quizes.data);
    return (
        <div>
            <h2>This is Quiz: {quizes.data.length}</h2>
        </div>
    );
};

export default Quiz;