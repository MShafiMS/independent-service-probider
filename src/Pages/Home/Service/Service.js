import React from 'react';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Services = ({service}) => {
    const {id, name, img, desc, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div id='services' className='col-12 col-md-4 col-sm-6'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.ImgOverlay>
                    <Card.Title className='tit fs-2 text-center text-light'>{name}</Card.Title>
                </Card.ImgOverlay>
            <Card.Body className='text-center'>
                <Card.Title>{price}$</Card.Title>
                <Card.Text>{desc}
                </Card.Text>
                <button onClick={() => navigateToServiceDetail(id)} className='button-28'>Order</button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Services;