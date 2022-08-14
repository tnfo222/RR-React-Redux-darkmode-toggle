import React from 'react';
import { useSelector } from 'react-redux';

function Photo() {
    const modeState = useSelector((state)=>state.mode)
    return (
        <div className="Photo" style={{'backgroundColor': modeState.color3}}>
            <img src={modeState.photo} alt="author" />
        </div>
    )
}

export default Photo;
