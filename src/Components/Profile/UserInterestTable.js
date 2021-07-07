import React from 'react'
import {Table, Row, Container, Button} from 'react-bootstrap';

function UserInterestTable() {
    return (
        <Container>
            <Row>
                <Table>
                    <tbody>
                        <tr>
                            <td>What positions are you looking for?</td>
                            <td>UX design</td>
                        </tr>
                        <tr>
                            <td>What is your experience level?</td>
                            <td>Senior Level</td>
                        </tr>
                        <tr>
                            <td>What is your hard skill set?</td>
                            <td>Adobe Photoshop, Microsoft Paint</td>
                        </tr>
                        <tr>
                            <td>What is your soft skill set?</td>
                            <td>Listening, Customer Service</td>
                        </tr>
                        <tr>
                            <td>What is the area of your expertise?</td>
                            <td>Apple Products</td>
                        </tr>
                        <tr>
                            <td>Preferred employment type</td>
                            <td>Contract</td>
                        </tr>
                        <tr>
                            <td>Preferred company culture</td>
                            <td>Extreme</td>
                        </tr>
                        <tr>
                            <td>Other notes</td>
                            <td>I like tacos</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>
                <Button className="profileButton">Edit</Button>
            </Row>
        </Container>
    )
}

export default UserInterestTable
