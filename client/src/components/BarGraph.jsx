import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
const BarGraph = ({ data }) => {
    const options = {
        scales: {
            x: {
                type: 'categoryAxis',
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: "100%" }}>
            <Bar data={data} />
        </div>
    );
};

export default BarGraph;
