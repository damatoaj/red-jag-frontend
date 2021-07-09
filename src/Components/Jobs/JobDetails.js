/*called by JobPortal*/

import React from 'react'
import { FaStar } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default function JobDetails({ data, savedJobsArray }) {
    const saveJobHandler = (index) => {
        let theJob = data.jobs[index];
        if(savedJobsArray.includes(theJob)) {
            return
        } else {
            savedJobsArray.push(theJob);
            console.log(savedJobsArray)
        };
    };

    return data.jobs.map((job, index) => (
        <Card className="jobCard">
            <IconContext.Provider value={{className:'react-icons'}}>
                <Card.Body>
                    <Row>
                        <Col><Card.Title>{job.title}</Card.Title></Col>
                        {/* ****test onCLick functionality code ****  onClick={() => alert('Hi! Admin')} */}
                        <Col xs={2}>
                            {/* <Button id="star-btn" onClick={(e)=> saveJobHandler(index)}>
                                 <FaStar size={20} />
                            </Button> */}
                            <button className="trackBtn" onClick={(e)=> saveJobHandler(index)}>
                                <FaStar size={20} />
                            </button>
                        </Col>

                    </Row>
                    <Row>
                        <Col><Card.Text>{job.company_name}</Card.Text></Col>
                        <Col xs={4}><Card.Text>{job.detected_extensions.posted_at}</Card.Text></Col>
                    </Row>
                    <Row>
                        <Col><Card.Text>{job.location}</Card.Text></Col>
                        <Col xs={4}><Card.Text>{job.detected_extensions.schedule_type}</Card.Text></Col>
                    </Row>
                    
                    {/* <Card.Text>{job.via}</Card.Text> */}
                    
                    
                
                </Card.Body>
            </IconContext.Provider>
        </Card>
    ))
}
