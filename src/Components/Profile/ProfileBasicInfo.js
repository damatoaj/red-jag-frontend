import React from 'react';
import EditProfileForm from './EditProfileForm';

//import boostrap tags
import { Container, Row, Button } from 'react-bootstrap';

export default function ProfileBasicInfo() {
    return (
        <div>
            <Container>

                <Row>
                    //! Need to change this to props
                    <img src="" />
                    <h2>User Name</h2>
                    <h3>Location</h3>
                </Row>

                <EditProfileForm />

                <Button id="dashboardBtn" variant="primary" size="lg" active>
                    Back to your dashboard
                </Button>

            </Container>
        </div>
    )
}