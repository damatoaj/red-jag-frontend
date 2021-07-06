import React from 'react';
import keywords from './dummyKeywords';
import {
    Table
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
        <div>
            <h1>NLP</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Number of Jobs Compared</th>
                        <th>{keywords.num_jobs_compared}</th>
                    </tr>
                    <tr>
                        <th>
                            Key Words
                        </th>
                    </tr>
                    <tr>
                        <th>
                            One Word 
                        </th>
                        <th>
                            Two Words
                        </th>
                        <th>
                            Three Words
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {keywordsColumnOne}
                    </td>
                    <td>
                        {keywordsColumnTwo}
                    </td>
                    <td>
                        {keywordsColumnThree}
                    </td>
                </tbody>
            </Table>
        </div>
    )
}

export default NLP
