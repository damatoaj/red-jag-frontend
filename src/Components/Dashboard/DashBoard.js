import React, { useState, useEffect } from 'react'

import { 
    BsFillEyeSlashFill, 
    BsEyeSlash, 
    BsPencil,
    BsEnvelope
 } from 'react-icons/bs';

import {
    Table,
    Button
} from 'react-bootstrap';

function DashBoard({ savedJobsArray }) {
    const [status, setStatus] = useState('');
    const [contactInfo, setContactInfo] = useState([]);
    const [comment, setComment] = useState('');
    const [editJob, setEditJob] = useState({});

    const statusChange = (e) => {
        setStatus(e.target.value)
    };

    const contactInfoChange = (e) => {
        setContactInfo(e.target.value);
        console.log(contactInfo)
    };

    const commentChange = (e) => {
        setComment(e.target.value);
    };

    const editJobChange = (e) => {
        console.log(e.target.value, 'click');
        setEditJob(savedJobsArray[e.target.value])
        console.log(editJob)
        editJob.status = status;
        editJob.comment = comment;
        console.log(editJob)
    };

    let jobsRow = savedJobsArray.map((savedJob, index) => (
        <tr>
            <th>{savedJob.title}</th>
            <th>{savedJob.company_name}</th>
            <th>{savedJob.detected_extensions.posted_at}</th>
            <th>
                
                <BsEnvelope />
            </th>
            <th>
                <select name="status" onChange={statusChange}> 
                    <option value="none" disabled hidden>Default</option>
                    <option value="done" >Done</option>
                    <option value="follow_up">Follow Up</option>
                    <option value="act_now">Act Now</option>
                </select>
            </th>
            <th>
                <input placeholder="Previously saved comment" onChange={commentChange}>
                
                </input>
            </th>
            <th>
                <Button onClick={editJobChange} value={index}>
                    <BsPencil value={index}/>
                </Button>
            </th>
            <th>
                <BsEyeSlash />
            </th>
        </tr>
    ))
    return (
        <Table className="logTable">
            <thead className='logHead'>
                <tr>
                    <th>Jobs You Applied</th>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Contact Info</th>
                    <th>Status</th>
                    <th>Comments</th>
                    <th>Edit</th>
                    <th>Hide</th>
                </tr>
            </thead>
            <tbody className='logBody'>
                {jobsRow}
            </tbody>
        </Table>
    )
}

export default DashBoard
