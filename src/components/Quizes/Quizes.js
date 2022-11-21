import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeQuestions from '../QuizeQuestions/QuizeQuestions';

const Quizes = () => {
    const quizesData = useLoaderData();
    const { questions, name } = quizesData.data;
    //console.log(name);
    return (
        <div>
            <h2>This is {name} quizes</h2>
            {
                questions.map(question =>
                    <QuizeQuestions
                        key={question.id}
                        question={question}
                    ></QuizeQuestions>)
            }
        </div>
    );
};

export default Quizes;