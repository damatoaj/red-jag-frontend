import React, { useState } from 'react'

//import components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Login from './Login'
import Signup from './Signup'

export default function AuthPortal() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const hidden = false;

    return (
        <Container>
        <Row>
            <Button className="authButton">Signup</Button>
            <Button className="authButton">Login</Button>
        </Row>
        <Row>
            <Login  
                setUsername={setUsername} 
                setPassword={setPassword}
            />
            <Signup 
                setUsername={setUsername} 
                setEmail={setEmail} 
                setPassword={setPassword}
            />
        </Row>
        </Container>
    )
}
