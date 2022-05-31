import React from 'react';
import './CarServicing.css';

const CarServicing = () => {
    return (

        <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-7">
                    <div className="text-center my-5">
                        <h1 className="">Car Servicing</h1>
                        <span className="mb-4">We Have The Top Car Engineer</span>
                    </div>
                </div>
            </div>
            <section className="gallery" id="gallery">
            <div className="box-container">
                <div className="box">
                <img src="https://media.istockphoto.com/photos/auto-mechanic-working-on-car-engine-in-mechanics-garage-repair-picture-id1284285171?k=20&m=1284285171&s=612x612&w=0&h=ND-oIfzIIVJuHI-Z_YGULQo7ApGXHvEDUsmmxmTnYNw=" alt="" />
                    <div className="content">
                    <h2>Aston Martin.</h2>
                    <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
                        <button className="button-62">See More!</button>
                    </div>
                </div>
                <div className="box">
                    <img src="https://www.blueridge.edu/wp-content/uploads/2020/02/ftr-automotive-mechanics-GI1165311626.jpg" alt="" />
                    <div className="content">
                        <h2>Audi</h2>
                        <p>Oh, he's just a little bit shy, and he hates ya for . . .</p>
                        <button className="button-62">See More!</button>
                    </div>
                </div>
            </div>
            </section>
        </div>

    );
};

export default CarServicing;