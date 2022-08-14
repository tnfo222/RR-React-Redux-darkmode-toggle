import React from 'react';
import { useSelector } from 'react-redux';

function NavLink(props) {
    const modeState = useSelector((state) => state.mode)

    return (
        <div className="NavLink" style={{'backgroundColor': modeState.color1}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink
