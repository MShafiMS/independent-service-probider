import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault();
         const name = event.target.name.value;
         const email = event.target.email.value;
         const password = event.target.password.value

         createUserWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/home');
    }
    return (
        <div className="container w-50 mx-auto">
            <h2 className='text-center mt-2'>Register</h2>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Your Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required/>
            </Form.Group>
            <Button variant="outline-dark w-50 mx-auto d-block mb-2" type="submit">
                Register
            </Button>
            <p>Already have an account? <Link to="/login" className='pe-auto text-decoration-none'>Please Login</Link> </p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;