import React from 'react';
import { useSelector } from 'react-redux';
import NavLink from './NavLink';

function Nav() {
    const modeState = useSelector((state) => state.mode)
    return (
        <div className="Nav" style={{'backgroundColor': modeState.color4}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
