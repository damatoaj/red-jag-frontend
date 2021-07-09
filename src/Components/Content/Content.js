import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "../../App.css";


import DashBoardPortal from '../Dashboard/DashBoardPortal'; 
import UserPortal from '../Profile/UserPortal';

function Content({ currentUser }) {

    let conditionalContent = currentUser !== null ?
            <Container className="contentContainer">
                <Route 
                    path='/portal' 
                    render={() => {
                        return <DashBoardPortal currentUser={currentUser} />
                    }}
                />
                <Route 
                    path='/profile' 
                    render={() => {
                        return <UserPortal currentUser={currentUser}/>
                    }}
                />
            </Container>
        : 
            <Container className="contentContainer">
                <Redirect  to='/' />
            </Container>

    return (
        <>
            {conditionalContent}
        </>
    )
}

export default Content
