import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const QuizeQuestions = ({ question }) => {
    const { options } = question;
    let isCorrect;
    const [answer, setAnswer] = useState([]);

    const handleAnswer = (option) => {
        isCorrect = (question.correctAnswer === option);
        if (isCorrect)
            setAnswer("Correct Answer");
        else
            setAnswer(question.correctAnswer);
        //console.log(option, isCorrect);
    }

    return (
        <div className='border mb-3'>
            <h2>{question.question}</h2>
            <Form className="m-auto w-75">
                {
                    options.map(option => <div className="ms-5 d-flex justify-content-start"
                        option={option}>
                        <Alert variant="success">
                            <Form.Check onClick={() => handleAnswer(option)}
                                label={option}
                                name="group1"
                                type="radio"
                            />
                        </Alert>
                    </div>)
                }
            </Form>
            {answer}
        </div>
    );
};

export default QuizeQuestions;