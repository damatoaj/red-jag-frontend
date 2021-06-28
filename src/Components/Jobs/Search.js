import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Search({ setJobQuery }) {
    const queryHandler = (e) => {
        setJobQuery(e.target.value);
    };

    return (
            <Navbar className='jobSearch'>
                <Button>Sort</Button>
                <Button>Filter</Button>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" onChange={queryHandler} />
                    <Button variant="outline-success" >Search</Button>
                </Form>
            </Navbar>
    )
}
