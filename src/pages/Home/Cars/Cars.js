import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Car from '../Car/Car';
import './Cars.css';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-shore-03299.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div id="cars" className='container my-5'>
            <div className="row">
                <h1 className='text-dark text-center fot-m'>Car Inventory</h1>
                <span className='text-center mb-5 fot-m'>Check out our recent cars</span>
                <div className="cars-container">
                    {
                        cars.slice(0, 6).map(car => <Car
                            key={car._id}
                            car={car}
                        >
                        </Car>)
                    }
                </div>
                <div className='mt-5 text-center' >
                    <Link to={'/update'} className='btn fot-m button-85'>View All Cars</Link>
                    <Link to={'/manage-items'} className='btn  mx-5 fot-m button-85'>Manage Items</Link>
                    <Link to={'/add-item'} className='btn  fot-m button-85'>Add Item</Link>
                </div>
            </div>
        </div>
    );
};

export default Cars;