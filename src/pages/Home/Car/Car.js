import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Car.css';

const Car = ({ car }) => {
    const { _id, name, img, price, quantity } = car;
    const navigate = useNavigate();

    const navigateToCarDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='car'>
            <div className="card-group">
                <div className="card">
                    <img src={img} className="card-img-top car-img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className='card-text'>Price: <strong className='text-danger'>${price}</strong></p>
                        <p className='card-text'>Quantity: <strong className='text-danger'>{quantity}</strong></p>
                    </div>
                    <div className="card-footer text-center py-3">
                        <button onClick={() => navigateToCarDetail(_id)} className='btn button-62 '>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;