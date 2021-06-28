import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function JobTable({jobs}) {
    const [data, setData] = useState({ data:[]});

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
                    <h1>UX/UI Designer</h1>
                    <p>google</p>
                    <p>createBootstrapComponent, MA</p>
                </Col>
                <Col>
                    <span>Posted 2 days ago</span>
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
                    Minimum qualifications:
                    <br></br>
                    • Bachelor's degree in Design or equivalent practical experience.
                    <br></br>
                    • Experience collaborating with team of Designers, Researchers, Engineers, Content Strategists and Product Managers throughout the design process; creating user flows, wireframes, and building user interface mockups and prototypes.
                    <br></br>
                    • Experience designing across multiple platforms.
                    <br></br>
                    • Portfolio highlighting multiple projects and your direct contributions (see Google's portfolio tips )
                    <br></br>
                    <br></br>
                    Preferred qualifications:
                    <br></br>
                    • Master's degree in Design, Computer Science, Human-Computer Interaction, or a related field.
                    <br></br>
                    • 8 years of relevant industry experience.
                    <br></br>
                    • Ability to lead and ideate products from scratch and improve features, all with a user-centered design process.
                    <br></br>
                    • Skills in communicating and influencing product design strategy.
                    <br></br>
                    • Excellent problem-solving skills and familiarity with technical constraints and limitations as they apply to designing for platforms such as desktop and mobile (i.e. Android and iOS).
                    <br></br>
                    <br></br>
                    About the job
                    <br></br>
                    At Google, we follow a simple but vital premise: "Focus on the user and all else will follow." Google’s Interaction Designers take complex tasks and make them intuitive and easy-to-use for billions of people around the globe. Throughout the design process—from creating user flows and wireframes to building user interface mockups and prototypes—you’ll envision how people will experience our products, and bring that vision to life in a way that feels inspired, refined, and even magical.
                    <br></br>
                    <br></br>
                    Responsibilities
                    <br></br>
                    • Collaborate with product managers, engineers, and cross-functional stakeholders to understand requirements, and provide creative, thoughtful solutions.
                    • Communicate the user experience at various stages of the design process with wireframes, flow diagrams, storyboards, mockups, and/or high fidelity prototypes.
                    • Integrate user feedback and business requirements into ongoing product experience updates.
                    • Advocate for the prioritization of design centered changes, refinements, and improvements.
                </p>
            </Row>
        </Container>
    )
}

export default JobTable
