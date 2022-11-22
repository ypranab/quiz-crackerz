import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeQuestions from '../QuizeQuestions/QuizeQuestions';

const Quizes = () => {
    const quizesData = useLoaderData();
    const { questions, name } = quizesData.data;
    let currentQuestion = 1;

    return (
        <div>
            <h2>This is {name} quizes</h2>
            {
                questions.map(question => (<QuizeQuestions
                    key={question.id}
                    question={question}
                    currentQuestion={currentQuestion}
                >{currentQuestion = currentQuestion + 1}</QuizeQuestions>))
            }
        </div>
    );
};

export default Quizes;