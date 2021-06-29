import React from 'react'
import { Link } from 'react-router-dom';

import { 
    Nav,
    Row

 } from 'react-bootstrap/';

function NavBar() {
    return (
        <Nav justify variant="tabs" className="jobNavbar flex-column">
            <Row>
                <Link to="/jobs">Jobs</Link>               
            </Row>
            <Row>
                <Link to="/todo">To Do List</Link>    
            </Row>
            <Row>
                <Link to="analytics">Analytics</Link>    
            </Row>
        </Nav>
    )
}

export default NavBar
