import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizeQuestions from '../QuizeQuestions/QuizeQuestions';
export const CurrentQuestion = createContext(1);

const Quizes = () => {
    const quizesData = useLoaderData();
    const { questions, name } = quizesData.data;
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);

    //setCurrentQuestion(nextQuestion);

    // if (nextQuestion < question.length) {
    //     setCurrentQuestion(nextQuestion);
    // } else {
    //     setShowScore(true);
    // }
    //console.log(name);
    return (
        <CurrentQuestion.Provider value={[currentQuestion, setCurrentQuestion]}>
            <div>
                <h2>This is {name} quizes</h2>
                {
                    questions.map(question => (<QuizeQuestions
                        key={question.id}
                        question={question}
                    ></QuizeQuestions>))
                }
            </div>
        </CurrentQuestion.Provider>

    );
};

export default Quizes;