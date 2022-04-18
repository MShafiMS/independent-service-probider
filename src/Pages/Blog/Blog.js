import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Difference between Authorization and Authentication</h3></Accordion.Header>
                    <Accordion.Body>
                    <span className='fw-bold'>Authentication:</span> Authentication is the process of verifying the identity of a user.Suppose, we have 2 types of users Once we know the user is valid, then (normal and admins) to a
                    we determine to which pages the user website. When the user tries to has access to. Normal users should not access the website, we ask them to be able to access admin pages. This is log in. This is authentication part. authorization part. <br />
                    <span className='fw-bold'>Authorization:</span>
                    Authorization is process of checking whether the user has access rights to the system. Once we know the user is valid, then we determine to which pages the user has acces to. Normal users should not be able to access admin pages. This is authorization part.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>Why are you using firebase? What other options do you have to implement authentication?</h3></Accordion.Header>
                    <Accordion.Body>
                    Firebase is the best option for Hosting, Authentication, Real time database and other more features. And it is offered by Google. So, I use Firebase. <br />

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>What other services does firebase provide other than authentication</h3></Accordion.Header>
                    <Accordion.Body>
                    Without Authentication Firebase Gives us Realtime Database, Hostings, Cloud Messaging, Storage, Remote Config, Test Lab, Crash Reporting etc.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </div>
    );
};

export default Blogs;