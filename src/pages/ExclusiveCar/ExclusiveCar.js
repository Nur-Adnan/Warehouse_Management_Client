import React from 'react';
import exclusiveCar from '../../images/bmw_car_bumper.jpg';
import './ExclusiveCar.css';
const ExclusiveCar = () => {
    return (
        <div className='exclusive-Car pt-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="text-center mb-5">
                            <h1>Exclusive Car Featured</h1>
                            <span className="mb-5">Our Exclusive Car</span>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center text-md-start  text-center">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="  mb-4">
                            <div className="content">
                                <h3>Bad</h3>
                                <p>i)  Neither as quiet nor as smooth on the move as we hoped. Close, though</p>
                                <p>ii) Certain ADAS systems frustrate, along with ill-considered switchgearCertain ADAS systems frustrate, along with ill-considered switchgear</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 d-none d-lg-block">
                        <div className="">
                            <img className='exclu' src={exclusiveCar} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="  mb-4">
                            <div className="content">
                                <h3 >Good</h3>
                                <p>i)  Versatile hybrid powertrain lays the ground for enviable refinement</p>
                                <p>ii) World-class cabin ambience melds old-school charm and modern tech</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveCar;