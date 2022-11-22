import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3 className='shadow-lg p-3 mb-5 bg-body rounded'>React useRef Hook</h3>
            <h5 className='bg-warning p-2 text-dark bg-opacity-25'>The useRef Hook allows you to persist values between renders.
                It can be used to store a mutable value that does not cause a re-render when updated.
                It can be used to access a DOM element directly.
                Does Not Cause Re-renders
                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                To avoid this, we can use the useRef Hook.</h5>
        </div>
    );
};

export default Blog;