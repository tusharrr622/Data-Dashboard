import React from 'react'
import { Pie } from "react-chartjs-2";
import '../stylesheets/SectorChart.css';
const SectorChart = ({ data }) => {
    const sectors = {};

    data.forEach((entry) => {
        if (!sectors[entry.sector]) {
            sectors[entry.sector] = 0;
        }
        sectors[entry.sector] += entry.intensity;
    });


    const getRandomColor = (index) => {
        const colors = [
            "#FF0080",
            "#00BFFF",
            "#FFD700",
            "#32CD32",
            "#FF4500",
            "#9400D3",
            // Add more colors as needed
        ];
        return colors[index % colors.length];
    };

    const chartData = {
        labels: Object.keys(sectors),
        datasets: [{
            data: Object.values(sectors),
            backgroundColor: Object.keys(sectors).map((_, index) =>
                getRandomColor(index)
            ),

        },],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                position: "average",
            },
        },
    };


    return (
        <div className='SectorChart'>
            <h1>Sector Chart</h1>
            <Pie data={chartData} options={chartOptions} />
        </div>
    )
}

export default SectorChart