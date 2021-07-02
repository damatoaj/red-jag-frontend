/*called by JobPortal*/

import React from 'react'
import { FaStar } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
    return data.jobs.map((job, index) => (
        <Card className="jobCard">
            <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Text>{job.company_name}</Card.Text>
                <Card.Text>{job.location}</Card.Text>
                <Card.Text>{job.via}</Card.Text>
                <Card.Text>{job.detected_extensions.posted_at}</Card.Text>
                <Card.Text>{job.detected_extensions.schedule_type}</Card.Text>
                <Button value={index} onClick={saveJobHandler}>Add to Saved</Button>
            </Card.Body>
        </Card>
    ))
}
