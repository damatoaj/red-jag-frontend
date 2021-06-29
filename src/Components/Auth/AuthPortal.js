import React, { useState } from 'react'

//import components
import {
    Container,
    Row
} from 'react-bootstrap';

import Login from './Login'
import Signup from './Signup'

export default function AuthPortal({ setShow, handleClose, handleShow}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const hidden = false;

    return (
            <Container>
                <Row>
                    <Login  
                        setUsername={setUsername} 
                        setPassword={setPassword}
                        handleClose={handleClose}
                    />
                </Row>
                <Row>
                    <Signup 
                        setUsername={setUsername} 
                        setEmail={setEmail} 
                        setPassword={setPassword}
                        handleClose={handleClose}
                    />
                </Row>
            </Container>
    )
}
