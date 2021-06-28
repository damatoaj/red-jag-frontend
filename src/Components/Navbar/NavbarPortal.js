import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/navbar.css';

//import dummy data
import jobs from './dummyData';
//import components
import NavBar from './NavBar';
import Search from './Search';
import JobTable from './JobTable';
import JobDetails from './JobDetails';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';



export default function NavbarPortal() {
  const [jobQuery, setJobQuery] = useState('');
  const [data, setData] = useState({ data:[]});

    useEffect(() => {
        const fetchJobList = async () => {
            const { data } = await axios('https://jsonplaceholder.typicode.com/todos/')
            setData({data:data})
        }
        fetchJobList();
    }, [setData])
    console.log(data.data)

    return (
        <Container className="navbarContainer" fluid>
          <Row>
            <Search setJobQuery={setJobQuery} />
          </Row>
          <Row>
            <Col>
              <NavBar />
            </Col>
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
                <JobTable jobs={jobs} />
              </Row>
            </Col>
          </Row>
        </Container>
    )
}
