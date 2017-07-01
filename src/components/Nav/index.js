import React from 'react';
import {NavLink} from '../NavLink/';

import './Menu.scss';

export const Nav = () => {

    return (
        <div className="Nav-container container">
            <div className="Nav-item">
                <NavLink to="/" label="Tasklist" exact={true}/>
            </div>
            <div className="Nav-item">
                <NavLink to="/about" label="About"/>
            </div>
        </div>
    )
}