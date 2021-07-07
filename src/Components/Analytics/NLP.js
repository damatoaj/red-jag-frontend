import React from 'react';
import keywords from './dummyKeywords';
import {
    Table,
    Col,
    Row,
    Container
} from 'react-bootstrap';

function NLP() {
    //best to display the data via table
    // columns single-word, two-word, three-word
    // five columns (top five key phrases)
    console.log(keywords)

    let keywordsColumnOne = keywords.results_uni.map((keyword, index) => (
        <tr>
            <td>
                {keyword}
            </td>
        </tr>
    ))

    let keywordsColumnTwo = keywords.results_bi.map((keyword, index) => (     
        <tr>
            <td>
                {keyword}
            </td>
        </tr>
    ))

    let keywordsColumnThree = keywords.results_tri.map((keyword, index) => (
        <tr>
            <td>
                {keyword}
            </td>
        </tr>
    ))

    return (
        <Container className="nlpTable">
            <div id = "nlpTextBlock">
                <h2 id="nlpText">Interested in learning more about what all of your favorite jobs have in common?</h2>
                <p>Besides basic skill requirements and maybe location, let's check out what else they have in common...</p>
                <p>We took all of the jobs that you have applied for and put together lists of keywords that you can use to customize your future job searches!</p>
            </div>
            <Row className="rowTwo">
               <h2>Key Words</h2>
            </Row>
            <Table hover responsive borderless>
                <thead>
                    <tr>
                        <th>One Word </th>
                        <th>Two Words</th>
                        <th>Three Words</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{keywordsColumnOne}</td>
                    <td>{keywordsColumnTwo}</td>
                    <td>{keywordsColumnThree}</td>
                </tbody>
            </Table>
            <Row className="rowOne">
                <Col md="auto">
                    <h2>Number of Jobs Compared:</h2>
                </Col>
                <Col>
                    <h3> {keywords.num_jobs_compared}</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default NLP
