import React from 'react'
import { Bubble } from 'react-chartjs-2';
import '../stylesheets/RelevanceChart.css';

const RelevanceChart = ({data}) => {

    const chartData = {
        datasets: [
          {
            label: 'Relevance',
            data: data.map(item => ({
              x: item.likelihood,
              y: item.impact,
              r: item.relevance * 5
            }),
            )
          },
          {
            label: 'Intensity',
            data: data.map(item => ({
              x: item.likelihood,
              y: item.impact,
              r: item.intensity,
            }),
            )
          }
        ]
      };


      const chartOptions = {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Likelihood',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Impact',
            },
          },
        },
        plugins: {
          legend: {
            display: true,
          },
        },
      };
  return (
    <div className='RelevanceChart'>
        <h1>Relevance Chart</h1>
        <Bubble data={chartData} options={chartOptions} />
    </div>
  )
}

export default RelevanceChart