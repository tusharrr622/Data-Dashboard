import { Radar } from "react-chartjs-2";
import '../stylesheets/LikelihoodChart.css';

const LikelihoodChart = ({ data }) => {
    const chartData = {
        labels: data.map((entry) => entry.country),
        datasets: [
            {
                label: "Likelihood",
                data: data.map((entry) => entry.likelihood),
                backgroundColor: (
                    "rgba(79, 59, 169, 0.7)",
                    "rgba(144, 104, 190, 0.7)"
                ),
                borderColor: (
                    "rgba(79, 59, 169, 1)",
                    "rgba(144, 104, 190, 1)"
                ),
                borderWidth: 2,
                pointBackgroundColor: ("white", "black"),
                pointBorderColor: (
                    "rgba(79, 59, 169, 1)",
                    "rgba(144, 104, 190, 1)"
                ),
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 5,
                stepSize: 1,
            },
        },
    };

    return (
        <div className='LikelihoodChart'>
            <h1>Likelihood Chart</h1>
            <Radar data={chartData} options={chartOptions} />
        </div>
    )
}

export default LikelihoodChart;