import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';

function JobTable({ displayData }) {
    console.log(displayData)
    console.log(displayData.display[0])
    return (
        <Container>
            {/* <Row>
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
            </Row> */}
            <Row>
                <Col>
                    <h1 id = 'title_text'>{displayData.display[0].title}</h1>
                    <p id = 'subtitletext_text'>{displayData.display[0].company_name}</p>
                    <p id = 'subtitle_text'>{displayData.display[0].location}</p>
                </Col>
                <Col>
                    <span id = 'subtitle2_text'>Posted {displayData.display[0].detected_extensions.posted_at}</span>
                    <span id = 'subtitle3_text'><Button id="star-btn"><FaStar/></Button> Save</span>
                    <h1>{displayData.display[0].title}</h1>
                    <p>{displayData.display[0].company_name}</p>
                    <p>{displayData.display[0].location}</p>
                </Col>
                <Col>
                    <span>{displayData.display[0].detected_extensions.posted_at}</span>
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
                    {displayData.display[0].description}
                </p>
            </Row>
        </Container>
    )
}

export default JobTable
