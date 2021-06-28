import React from 'react'
import '../../css/auth.css';

//import components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Signup({ setUsername, setEmail, setPassword}) {
    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('signup')
    };

    return (
        <Container className="authContainer">
        <Row>
            <Form className="authForm" onSubmit={submitHandler}>
            <Form.Group className="authUsernameGroup" >
                        <Form.Control 
                            size="lg" 
                            type="text" 
                            placeholder="Username" 
                            className="authUsernameControl"
                            onChange={usernameHandler} 
                        />
                    </Form.Group>
                <Form.Group controlId="formBasicEmail" className="authEmailGroup">
                    <Form.Control 
                        size="lg" 
                        type="email" 
                        placeholder="Email" 
                        className="authEmailControl" 
                        onChange={emailHandler}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="authPasswordGroup" >
                    <Form.Control 
                        size="lg" 
                        type="password" 
                        placeholder="Password" 
                        className="authPasswordControl" 
                        onChange={passwordHandler}
                    />
                </Form.Group>
                <Button className="authButton" size="lg" variant="primary" type="submit">Sign Up</Button>
            </Form>
        </Row>
    </Container>
    )
}
