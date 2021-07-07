import React, { useState } from 'react'
import '../../css/profile.css';

import headshot from '../../Images/headshot.png'
import { 
    Row,
    Col,
    Tabs,
    Tab
 } from 'react-bootstrap';

import ProfileQandA from './ProfileQandA';
import EditProfileForm from './EditProfileForm';
import ProfileBasicInfo from './ProfileBasicInfo';
import UserProfileTable from './UserProfileTable';
import UserInterestTable from './UserInterestTable';

export default function UserPortal({ currentUser }) {
    const [activeTab, setActiveTab] = useState('details')
    const [hidden, setHidden] = useState(true);
    return (
        <Row className="userPortal">
            <Col md={3} className="columnOne">
                <img src={headshot} className="headshot" />
            </Col>
            <Col fluid md="auto" className="columnTwo">
                <Tabs
                    id="profileTabs"
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k)}
                >
                    <Tab eventKey="details" title="Details">
                        <UserProfileTable />
                    </Tab>
                    <Tab eventKey="interests" title="Interests">
                        <UserInterestTable />
                    </Tab>

                </Tabs>
                {/* <ProfileBasicInfo currentUser={currentUser}/> */}
                {/* <ProfileQandA currentUser={currentUser} /> */}
            </Col>
        </Row>
    )
}
