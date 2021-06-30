import React from 'react'

import {
    Table
} from 'react-bootstrap';

function DashBoard() {
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
            </thead>
        </Table>
    )
}

export default DashBoard
