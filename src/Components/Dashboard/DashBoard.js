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
            <td>{savedJob.title}</td>
            <td>{savedJob.company_name}</td>
            <td>{savedJob.detected_extensions.posted_at}</td>
            <td>
                
                <BsEnvelope />
            </td>
            <td>
                <select name="status" onChange={statusChange}> 
                    <option value="none" disabled hidden>Default</option>
                    <option value="done" >Done</option>
                    <option value="follow_up">Follow Up</option>
                    <option value="act_now">Act Now</option>
                </select>
            </td>
            <td>
                <input placeholder="Previously saved comment" onChange={commentChange}>
                
                </input>
            </td>
            <td>
                <Button onClick={editJobChange} value={index}>
                    <BsPencil value={index}/>
                </Button>
            </td>
            <td>
                <BsEyeSlash />
            </td>
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
            <tbody id = 'logView' className='logBody'>
            {jobsRow}
            </tbody>
        </Table>
    )
}

export default DashBoard
