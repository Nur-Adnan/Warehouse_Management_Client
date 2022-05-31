import React, { useEffect, useState } from 'react';
import CarServicing from '../../CarServicing/CarServicing';
import ExclusiveCar from '../../ExclusiveCar/ExclusiveCar';
import Gallery from '../../Gallery/Gallery';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';

const Home = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-shore-03299.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div className='min-vh-100'>
            {
                cars[0]?.img ? 
                <div>
                    <Banner></Banner>
                    <Gallery></Gallery>
                    <ExclusiveCar></ExclusiveCar>
                    <Cars></Cars>
                    <CarServicing></CarServicing>
                </div> : <Loading></Loading>
            }
        </div>
    );
};

export default Home;