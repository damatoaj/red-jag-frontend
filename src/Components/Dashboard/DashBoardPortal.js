import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import DashBoardNav from './DashBoardNav';
import JobsPortal from '../Jobs/JobsPortal';
import TodoPortal from '../Todo/TodoPortal';

import {
    Col,
    Row,
    Container
} from 'react-bootstrap'

function DashBoardPortal() {
    return (
        <Router>
            <Container>
                <Row>
                    <Col>
                        <DashBoardNav />
                    </Col>
                    <Col>
                        <Route
                            path='/jobs'
                            render={ () => {
                                return <JobsPortal />
                            }}
                        />
                        
                        <Route
                            path='/todo'
                            render={()=> {
                                return <TodoPortal />
                            }}
                        />
                    </Col>

                </Row>
            </Container>
        </Router>
    )
}

export default DashBoardPortal
