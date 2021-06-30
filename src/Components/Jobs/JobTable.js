import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function JobTable({ displayData }) {;
    return (
        <Container>
            <Row>
                <Col>
                    <h1>
                        Jobs
                    </h1>
                </Col>
                <Col>
                    <h1>
                        Alerts
                    </h1>
                </Col>
                <Col>
                    <h1>
                        Saved
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>{displayData[0].title}</h1>
                    <p>{displayData[0].company_name}</p>
                    <p>{displayData[0].location}</p>
                </Col>
                <Col>
                    <span>{displayData[0].detected_extensions.posted_at}</span>
                    <span>save</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="applyButtons">Apply on Google Careers</Button>
                </Col>
                <Col>
                    <Button className="applyButtons">Apply on LinkedIn</Button>
                </Col>
                <Col>
                    <Button className="applyButtons">Apply on ZipRecruiter</Button>
                </Col>
                <Col>
                    <Button className="applyButtons">Apply on Indeed</Button>
                </Col>
            </Row>
            <Row>
                <p className="jobDescription">
                    {displayData[0].description}
                </p>
            </Row>
        </Container>
    )
}

export default JobTable
