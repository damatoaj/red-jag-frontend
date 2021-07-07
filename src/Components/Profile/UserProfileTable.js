import React from 'react'
import { Container, Row, Table, Button } from 'react-bootstrap';

function UserProfileTable() {
    return (
        <Container>
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>James</td>
                            <td>Tomlin</td>
                            <td>kewlguy123</td>
                            <td>james.tomlin@aol.com</td>
                            <td>GenericPassword123</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Button className="profileButton">Edit Profile</Button>
            </Row>
        </Container>
    )
}

export default UserProfileTable
