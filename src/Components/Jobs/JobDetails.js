import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function JobDetails({data}) {
    console.log(data)

    return data.map((job, index) => (
        <Card className="jobCard">
            <Card.Body>
                <Card.Title>Card Title {job.id}</Card.Title>
                <Card.Text>Location {job.title}</Card.Text>
                <Button>Add to Saved</Button>
            </Card.Body>
        </Card>
    ))
}
