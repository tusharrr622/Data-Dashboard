import React from 'react'
import { PolarArea } from 'react-chartjs-2';
import {
    Chart,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
import '../stylesheets/TopicsChart.css'

const TopicsChart = ({ data }) => {
    const topics = data.map(item => item.topic);

    const chartData = {
        labels: topics,
        datasets: [
            {
                data: data.map(item => item.relevance),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        scale: {
            ticks: {
                beginAtZero: true,
                stepSize: 1,
                max: 5,
            },
        },
    };


    return (
        <div className='TopicsChart'>
            <h1>Topics Chart</h1>
            <PolarArea data={chartData} options={chartOptions} />
        </div>
    )
}

export default TopicsChart