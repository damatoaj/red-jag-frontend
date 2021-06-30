import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/navbar.css';

//import dummy data
import jobs from './dummyDataCall';
import display from './dummyDataDisplay';
//import components
import Search from './Search';
import JobTable from './JobTable';
import JobDetails from './JobDetails';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';



export default function NavbarPortal() {
  const [jobQuery, setJobQuery] = useState('');
  const [data, setData] = useState({ data:[]});
  const [displayData, setDisplayData] = useState({ displayData:[]})

    useEffect(() => {
        const fetchJobList = async () => {
            // const { data } = await axios('https://jsonplaceholder.typicode.com/todos/')
            setData({data:jobs})
            setDisplayData({display: display})
        }
        fetchJobList();
    }, [setData, setDisplayData])
    console.log(data)
    console.log(displayData)

    return (
        <Container className="navbarContainer" fluid>
          <Row>
            <Search setJobQuery={setJobQuery} />
          </Row>
          <Row>
            <Col className="jobColOne">
              <Row>
                <h1>Job Openings</h1>
                <JobDetails data={data.data} />
              </Row>
            </Col>
            <Col className="jobColTwo" xs={8} sm={8} md={8} lg={8}>
              <Row>
                <Tabs>
                  <Tab eventKey="Jobs" title="Jobs">
                    
                  </Tab>
                  <Tab eventKey="SaveJobs" title="Save Jobs">
                  </Tab>
                </Tabs>
              </Row>
              <Row>
                <JobTable displayData={displayData.display} />
              </Row>
            </Col>
          </Row>
        </Container>
    )
}
