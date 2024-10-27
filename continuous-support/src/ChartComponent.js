// src/ChartComponent.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Chart.jsのコンポーネントを登録
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <h2>My Doughnut Chart</h2>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default ChartComponent;

