import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import '../stylesheets/Country.css'

const Country = ({ data }) => {
    const [selectedCountry, setSelectedCountry] = useState("United States of America");
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const countryData = data.filter(
            (entry) => entry.country === selectedCountry
        );

        const sectors = {};
        countryData.forEach((entry) => {
            if (!sectors[entry.sector]) {
                sectors[entry.sector] = [];
            }
            sectors[entry.sector].push(entry.intensity);
        });

        const sectorLabels = Object.keys(sectors);
        const sectorIntensities = sectorLabels.map(
            (sector) =>
                sectors[sector].reduce((a, b) => a + b, 0) / sectors[sector].length // average intensity
        );

        setChartData({
            labels: sectorLabels,
            datasets: [
                {
                    label: "Average Intensity",
                    data: sectorIntensities,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                },
            ],
        });
    }, [selectedCountry, data]);


    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div className='Country'>
            <h1>Country Chart</h1>
            <select
                value={selectedCountry}
                onChange={handleCountryChange}
            >
                <option value="United States of America">
                    United States of America
                </option>
                <option value="Mexico">Mexico</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Russia">Russia</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
            </select>
            {chartData && <Bar data={chartData} />}
        </div>
    )
}

export default Country