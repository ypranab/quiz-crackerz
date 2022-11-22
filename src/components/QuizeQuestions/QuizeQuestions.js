import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

const QuizeQuestions = ({ question, currentQuestion }) => {
    const { options } = question;

    const [answer, setAnswer] = useState([]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [show, setShow] = useState(false);

    const showAnswerBtn = () => {
        setShowAnswer(question.correctAnswer);
        setShow(true);
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
            <h3>Question No {currentQuestion}.{question.question}</h3>
            <Button variant='warning' className='d-flex justify-content-end' onClick={showAnswerBtn}>Show</Button>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong>Correct Answer: {showAnswer}</strong>
                </Toast.Header>
            </Toast>
            <Form className='text-start container'>
                {
                    options.map((idx, option) => <div className="ms-5 ps-5 w-50"
                        key={idx}
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