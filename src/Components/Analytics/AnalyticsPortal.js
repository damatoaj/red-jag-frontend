import React, { useState } from 'react';
import '../../css/analytics.css';

import Map from './Map';
import NLP from './NLP';

import {
    Container,
    Tabs,
    Tab
} from 'react-bootstrap';

function AnalyticsPortal() {
    const [activeTab, setActiveTab] = useState('nlp')

    return (
        <Container>
            <Tabs
                id="dataTabs"
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
            >
                <Tab eventKey='nlp' title="NLP Analysis">
                    <NLP />
                </Tab>
                <Tab eventKey='map'title="Job Map">
                    <Map />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default AnalyticsPortal
