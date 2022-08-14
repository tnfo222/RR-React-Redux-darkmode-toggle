import React from 'react';
import { useSelector } from 'react-redux';

function Footer() {
    const modeState = useSelector((state) => state.mode)
    return (
        <div className="Footer" style={{'backgroundColor': modeState.color3}}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
