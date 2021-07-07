import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../css/profile.css';

import headshot from '../../Images/headshot.png'
import { 
    Container,
    Row,
    Col,
    Button
 } from 'react-bootstrap';

import ProfileQandA from './ProfileQandA';
import EditProfileForm from './EditProfileForm';
import ProfileBasicInfo from './ProfileBasicInfo';

export default function UserPortal({ currentUser }) {
    const [hidden, setHidden] = useState(true);
    return (
        <Row className="userPortal">
            <Col md={3} className="columnOne">
                <img src={headshot} className="headshot" />
            </Col>
            <Col fluid md="auto" className="columnTwo">
                <ProfileBasicInfo currentUser={currentUser}/>
                <ProfileQandA currentUser={currentUser} />
            </Col>
        </Row>
    )
}
