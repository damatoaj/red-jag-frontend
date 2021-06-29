import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import LandingPortal from '../Landing/LandingPortal';
import DashBoardPortal from '../Dashboard/DashBoardPortal'; 
import UserPortal from '../Profile/UserPortal';

function Content({ currentUser }) {
    let conditionalContent = currentUser ?
            <Container>
                <Route path='/dashboard' render={() => (
                    <DashBoardPortal />
                )}>
                </Route>
                <Route path='/profile' render={() => (
                    <UserPortal />
                )}/>
            </Container>
        : 
            <Container>
                <Route path='/' render={() => (
                    <LandingPortal />
                )}/>
            </Container>

    return (
        <div>
            {conditionalContent}
        </div>
    )
}

export default Content
