import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from '../Home/Car/Car';
import './Update.css';
const Update = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-shore-03299.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div id="cars" className='container my-5'>
            <div className="row">
                <h1 className='text-danger text-center'>All Items</h1>
                <span className='text-center mb-4'>Check out our recent cars</span>
                <div className='mb-5 mt-2 text-center' >
                    <Link to={'/manage-items'} className='btn button-85'>Manage Items</Link>
                    <Link to={'/add-item'} className='btn mx-5 button-85'>Add Item</Link>
                    <Link to={'/myItems'} className='btn button-85'>My Items</Link>
                </div>
                <div className="cars-container">
                    {
                        cars.map(car => <Car
                            key={car._id}
                            car={car}
                        >
                        </Car>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Update;