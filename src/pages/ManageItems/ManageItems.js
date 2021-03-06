import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCars from '../../hooks/useCars';

const ManageItems = () => {
    const [cars, setCars] = useCars();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://cryptic-shore-03299.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = cars.filter(car => car._id !== id);
                setCars(remaining);
            })
        }
    }

    return (
        <div className='my-5'>
            <div className='container'>
                <h2 className='text-center mb-4'>Manage your items</h2>
                <div className='mb-4 text-center' >
                    <Link to={'/update'} className='btn btn-danger '>View All Cars</Link>
                    <Link to={'/add-item'} className='btn btn-danger mx-2'>Add Item</Link>
                    <Link to={'/myItems'} className='btn btn-danger'>My Items</Link>
                </div>
                <div className="row text-white">
                    <div className="col-12">
                        <div className=''>
                            <Table striped bordered hover responsive variant="dark">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price/$</th>
                                        <th>Quantity</th>
                                        <th className=''>Supplier</th>
                                        <th>Image</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cars.map(car => {
                                            return (
                                                <tr key={car._id}>
                                                    <td>{car.name}</td>
                                                    <td>${car.price}</td>
                                                    <td>{car.quantity}</td>
                                                    <td>{car.supplierName}</td>
                                                    <td><img className='' style={{ width: '60px' }} src={car.img} alt="" /></td>
                                                    <td><button className='rounded rounded-circle' onClick={() => handleDelete(car._id)}><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button></td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </Table>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default ManageItems;