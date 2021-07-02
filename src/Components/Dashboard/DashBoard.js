import React from 'react';

import {
    Table
} from 'react-bootstrap';

function DashBoard({ savedJobsArray }) {
    console.log(savedJobsArray[0].title)

   

    return (
        <Table>
            <thead>
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
                <tbody>
                    {savedJobsArray.map((job, index) => {
                        return [
                            <tr key={index}>
                                <td>{job.title}</td>
                                <td>{job.company_name}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ]
                    })}       
                </tbody>
            </thead>
        </Table>
    )
}

export default DashBoard
