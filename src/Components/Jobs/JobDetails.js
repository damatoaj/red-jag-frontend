/*called by JobPortal*/

import React from 'react'
import { FaStar } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default function JobDetails({ data, savedJobsArray }) {
    const saveJobHandler = (e) => {
        let index = (e.target.value);
        console.log(index)
        let theJob = data.jobs[index];
        savedJobsArray.push(theJob)
        console.log(data.jobs[index])
        console.log(theJob)
        console.log(savedJobsArray)
    };

    //todo get access to the entire object to pass to the saved
    // rebecca updated visuals on "add to saved" button to be star button
    return data.jobs.map((job, index) => (
        <Card className="jobCard">
            <Card.Body>
                <Row>
                    <Col><Card.Title>{job.title}</Card.Title></Col>
                    <Col><Button id="star-btn" value={index} onClick={saveJobHandler}><FaStar/></Button></Col>
                </Row>
                <Row>
                    <Col><Card.Text>{job.company_name}</Card.Text></Col>
                    <Col><Card.Text>{job.detected_extensions.posted_at}</Card.Text></Col>
                </Row>
                <Row>
                    <Col><Card.Text>{job.location}</Card.Text></Col>
                    <Col><Card.Text>{job.detected_extensions.schedule_type}</Card.Text></Col>
                </Row>
                
                {/* <Card.Text>{job.via}</Card.Text> */}
                
                
               
            </Card.Body>
        </Card>
    ))
}
