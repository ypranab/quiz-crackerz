import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Stats = () => {
    const data = useLoaderData();
    console.log(data.data);
    return (
        <div>
            <h2>This is Stats</h2>
            <BarChart className='m-auto' width={600} height={400} data={data.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Stats;