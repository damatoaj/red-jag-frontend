import React, { useState } from 'react'

import {
    Modal,
    Container,
    Row
} from 'react-bootstrap';

import DefaultHeader from './DefaultHeader';
import AuthPortal from '../Auth/AuthPortal';
import AuthHeader from './AuthHeader';

function HeaderPortal({ currentUser, setCurrentUser, handleAuth }) {
    const [showAuth, setShowAuth] = useState(false);

    const handleClose = () => setShowAuth(false);
    const handleShow = (e) => {
        setShowAuth(true);
        console.log(showAuth, 'click')
    }

    let conditionalHeader = currentUser ? 
        <AuthHeader handleAuth={handleAuth} setCurrentUser={setCurrentUser} currentUser={currentUser} /> : 
        <DefaultHeader handleAuth={handleAuth} handleShow={handleShow} />;

    return (
        <Container>
            {conditionalHeader}
            <Modal show={showAuth}>
                <AuthPortal 
                    setShowAuth={setShowAuth}
                    handleClose={handleClose}
                    handleAuth={handleAuth}
                    setCurrentUser={setCurrentUser}
                />
            </Modal>
        </Container>
    )
}

export default HeaderPortal
