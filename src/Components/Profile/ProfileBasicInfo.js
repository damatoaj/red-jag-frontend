import React from 'react';
import { Link } from 'react-router-dom';
import EditProfileForm from './EditProfileForm';

//import boostrap tags
import { Container, Row, Button } from 'react-bootstrap';

export default function ProfileBasicInfo({ currentUser }) {
    console.log(currentUser)

 
    return (
        <Container>
            <Row>
                <img src="" />
            </Row>
            <Row>
                <EditProfileForm />
            </Row>
        </Container>
    )
}