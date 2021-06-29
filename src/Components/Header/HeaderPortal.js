import React, { useState } from 'react'

import {
    Modal
} from 'react-bootstrap';

import DefaultHeader from './DefaultHeader';
import AuthPortal from '../Auth/AuthPortal';
import AuthHeader from './AuthHeader';

function HeaderPortal({ setCurrentUser, handleAuth }) {
    const [showAuth, setShowAuth] = useState(false);

    const handleClose = () => setShowAuth(false);
    const handleShow = (e) => {
        setShowAuth(true);
        console.log(showAuth, 'click')
    }

    return (
        <div>
            <DefaultHeader 
                handleShow={handleShow}
            />
            <Modal show={showAuth}>
                <AuthPortal 
                    setShowAuth={setShowAuth}
                    handleClose={handleClose}
                    handleAuth={handleAuth}
                    setCurrentUser={setCurrentUser}
                />
            </Modal>
        </div>
    )
}

export default HeaderPortal
