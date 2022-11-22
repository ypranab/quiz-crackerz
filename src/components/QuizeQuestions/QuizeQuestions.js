import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

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
        <div className='bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-3 container position-relative'>
            <h3 className='mb-5 me-5 text-start'>Question No {currentQuestion}.{question.question}</h3>
            <FontAwesomeIcon icon={faEye} variant='warning' className='position-absolute top-0 end-0' onClick={showAnswerBtn} />
            <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>
                <Toast.Header className='position-absolute top-10 end-0'>
                    <strong>Correct Answer: {showAnswer}</strong>
                </Toast.Header>
            </Toast>
            <Form className='text-start container'>
                {
                    options.map(option => <div className="ms-5 ps-5 w-50"
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