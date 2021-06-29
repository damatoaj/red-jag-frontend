import React from 'react'
import { Route, Redirect } from 'react-router-dom';

import LandingPortal from '../Landing/LandingPortal';
import DashBoardPortal from '../Dashboard/DashBoardPortal'; 
import UserPortal from '../Profile/UserPortal';

function Content() {
    return (
        <div>
            <Route exact path='/' component={LandingPortal} />
            <Route path='/dashboard' render={() => (
                <DashBoardPortal />
            )}>
            </Route>
            <Route path='/profile' render={() => (
                <UserPortal />
            )} />
        </div>
    )
}

export default Content
