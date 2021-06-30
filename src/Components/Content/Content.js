import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import LandingPortal from '../Landing/LandingPortal';
import DashBoardPortal from '../Dashboard/DashBoardPortal'; 
import UserPortal from '../Profile/UserPortal';

function Content({ currentUser }) {
    let conditionalContent = currentUser ?
            <Container>
                <Route path='/dashboard' render={() => {
                    return <DashBoardPortal />
                }}>
                </Route>
                <Route path='/profile' render={() => {
                    return <UserPortal />
                }}/>
            </Container>
        : 
            <Container>
                <Route path='/' render={() => {
                    return <LandingPortal />
                }}/>
            </Container>

    return (
        <Router>
            {conditionalContent}
        </Router>
    )
}

export default Content
