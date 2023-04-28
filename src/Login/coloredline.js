import React from 'react';

const ColoredLine = ({ color }) => (
    <hr  style={{
        color: color,
        backgroundColor: color,
        height: 0.1,
        borderColor : color, 
        width: 300, 
        marginTop: 15
    }}/>
);

export default ColoredLine;