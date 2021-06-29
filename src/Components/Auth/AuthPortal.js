import React, { useState } from 'react'

//import components
import {
    Container,
    Row,
    Button
} from 'react-bootstrap';

import Login from './Login'
import Signup from './Signup'

export default function AuthPortal({ setCurrentUser, handleClose, handleAuth}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authRedirect, setAuthRedirect] = useState(false);
    const hidden = false;

    const dummyUser = {
        username: 'John Doe',
        email: 'johndoe@email.com',
        password: '123123123'
    }

    return (
            <Container>
                <Row>
                    <Button onClick={handleClose}>Close</Button>
                </Row>
                <Row>
                    <Login  
                        setUsername={setUsername} 
                        setPassword={setPassword}
                        handleClose={handleClose}
                        user={username}
                        password={password}
                        dummyUser={dummyUser}
                        handleAuth={handleAuth}
                        setCurrentUser={setCurrentUser}
                        authRedirect={authRedirect}
                        setAuthRedirect={setAuthRedirect}
                    />
                </Row>
                <Row>
                    <Signup 
                        setUsername={setUsername} 
                        setEmail={setEmail} 
                        setPassword={setPassword}
                        handleClose={handleClose}
                        username={username}
                        password={password}
                        email={email}
                        dummyUser={dummyUser}
                        handleAuth={handleAuth}
                        setCurrentUser={setCurrentUser}
                        authRedirect={authRedirect}
                        setAuthRedirect={setAuthRedirect}
                    />
                </Row>
            </Container>
    )
}
