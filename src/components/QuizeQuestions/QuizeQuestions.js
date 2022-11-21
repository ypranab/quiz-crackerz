import React from 'react';

const QuizeQuestions = ({ question }) => {
    const { options } = question;

    return (
        <div>
            {question.question}
            {
                options.map(option => <li
                    option={option}
                >Option: {option}</li>)
            }
        </div>
    );
};

export default QuizeQuestions;