import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    
    return (
        <div>
            <h2 className='text-center'>Your Order is: {serviceId}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Procced Checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;