import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { CurrentQuestion } from '../Quizes/Quizes';

const QuizeQuestions = ({ question }) => {
    const { options } = question;

    const [currentQuestion, setCurrentQuestion] = useContext(CurrentQuestion);
    const [answer, setAnswer] = useState([]);
    const [showAnswer, setShowAnswer] = useState(false);

    const showAnswerBtn = () => {
        setShowAnswer(question.correctAnswer);
    }

    let isCorrect;
    const handleAnswer = (option) => {
        isCorrect = (question.correctAnswer === option);
        if (isCorrect) {
            setAnswer("Great!! Correct Answer");
        }
        else {
            setAnswer("Oh no!! Wrong Answer.");
        }
    }

    return (
        <div className='border mb-3 container'>
            <button onClick={showAnswerBtn}>Show Answer</button>
            {showAnswer}
            <h3>Question No {currentQuestion}.{question.question}</h3>
            <Form className="mw-100">
                {
                    options.map(option => <div className="ms-5 ps-5 d-flex justify-content-start"
                        option={option}>
                        <Alert variant="success">
                            <Form.Check onClick={() => handleAnswer(option)}
                                label={option}
                                name="group1"
                                type="radio" />
                        </Alert>
                    </div>)
                }
            </Form>
            <h4 className='bg-warning w-50 m-auto mb-3'>{answer}</h4>
        </div>
    );
};

export default QuizeQuestions;