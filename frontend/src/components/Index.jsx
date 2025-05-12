import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import IntensityChart from './IntensityChart'
import axios from 'axios';
import RegionChart from './RegionChart';
import TopicsChart from './TopicsChart';
import RelevanceChart from './RelevanceChart';
import SectorChart from './SectorChart';
import LikelihoodChart from './LikelihoodChart';
import Country from './Country';



const Index = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then((response) => {
                setData(response.data); // ✅ sets the new data
                console.log(response.data); // ✅ log the fetched data instead of state
            });
    }, []);

    return (
        <>
            <Navbar />
            <IntensityChart data={Data} />
            <div className='container'>
                <RegionChart data={Data} />
                <TopicsChart data={Data} />
            </div>
            <RelevanceChart data={Data} />

            <div className='container-2'>
                <SectorChart data={Data} />
                <LikelihoodChart data={Data} />
            </div>
            <Country data={Data} />
        </>
    )
}

export default Index;