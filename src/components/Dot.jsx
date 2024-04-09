import React from 'react';

const Dot = ({ x, y, color }) => {
    const dotStyle = {
        position: 'fixed',
        left: `${x}px`,
        top: `${y}px`,
        width: '24px',
        height: '24px',
        borderRadius: '24px',
        backgroundColor: color,
        pointerEvents: null,
        zIndex: '10',
    };

    return <div style={dotStyle}></div>;
};

export default Dot;