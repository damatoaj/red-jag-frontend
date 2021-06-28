import React from 'react'

import { 
    Nav,
    Col,
    Row,

 } from 'react-bootstrap/';

function NavBar() {
    return (
        <Nav justify variant="tabs" className="jobNavbar flex-column">
            <Row>
                <Nav.Link href="#'">Dashboard</Nav.Link>
            </Row>
            <Row>
                <Nav.Link href="/jobs">Jobs</Nav.Link>               
            </Row>
            <Row>
                <Nav.Link href="/todo">To Do List</Nav.Link>    
            </Row>
            <Row>
                <Nav.Link href="#">Analytics</Nav.Link>    
            </Row>
        </Nav>
    )
}

export default NavBar
