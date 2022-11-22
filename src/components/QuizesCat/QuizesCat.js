import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const QuizesCat = ({ quiz }) => {
    //console.log(quiz);
    const { logo, id } = quiz;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className='w-75' variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{quiz.name}</Card.Title>
                <Card.Text>Total Quizes: {quiz.total}</Card.Text>
                <Link to={`/quizes/${id}`}>
                    <Button variant="primary">Go</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default QuizesCat;