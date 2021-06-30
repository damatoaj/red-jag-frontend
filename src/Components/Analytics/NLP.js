import React, { PureComponent } from 'react';
import BarChartGraph from './BarChartGraph';
import TreeMap from './TreeMap';

function NLP() {
    //best to display the data via table
    // columns single-word, two-word, three-word
    // five columns (top five key phrases)
    return (
        <div>
            <h1>NLP</h1>
            <BarChartGraph />
            <TreeMap />
        </div>
    )
}

export default NLP
