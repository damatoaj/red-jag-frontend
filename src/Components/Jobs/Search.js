import React from 'react';
import { IconContext } from 'react-icons/lib';
import { 
    FaSearch,
    FaFilter,
    FaSortAlphaDown,
    FaSortAlphaUpAlt
} from 'react-icons/fa';

import { 
    InputGroup,
    Col,
    Form,
    Navbar,
    Button
 } from 'react-bootstrap';


export default function Search({ setJobQuery }) {
    const queryHandler = (e) => {
        setJobQuery(e.target.value);
    };

    return (
    <IconContext.Provider value={{className:'react-icons'}}>
        <Navbar className='jobSearch'>
                <Col xs='auto'>
                    <Button className="searchButtons" >
                        <FaSortAlphaDown size={20} className="searchButtons" />
                    </Button>
                    <Button className="searchButtons" >
                        <FaSortAlphaUpAlt size={20} />
                    </Button>
                    <Button className="searchButtons" >
                        <FaFilter size={20} />
                    </Button>
                </Col>
                <Col lg>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <FaSearch/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="text" placeholder="Search here.." onChange={queryHandler} />
                        <Button variant="outline-success" >Search</Button>
                    </InputGroup>
                </Col>
        </Navbar>
    </IconContext.Provider>
    )
}
