import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import './Login.css'


const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);      const navigate = useNavigate()

      if(user){
          navigate(from, { replace: true});
      }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="container w-50 mx-auto">
            <h2 className='text-primary text-center mt-2'>Login</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                Submit
            </Button>
            <p>Need an account? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
            </Form>
            <h6><span>or</span></h6>
        </div>
    );
};

export default Login;