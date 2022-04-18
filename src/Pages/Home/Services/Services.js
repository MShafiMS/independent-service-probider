import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h1 className='mt-3 text-center'>Our Services</h1>
            <p className='text-center'>Bride In A Fabulous Dress… Honest Smiles, Love And Pure Happiness In The Eyes – It Will All Be Present On Your Wedding Photographs, Because That’s What Truly Matters.</p>
            <div className='row'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;