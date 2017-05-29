import React from 'react';
import {MenuLink} from '../MenuLink/';

import './Menu.css';

export const Menu = () => {

    return (
        <div className="Header-Container container">
            <div className="Header-Item">
                <MenuLink to="/" label="Tasklist" exact={true}/>
            </div>
            <div className="Header-Item">
                <MenuLink to="/about" label="About"/>
            </div>
        </div>
    )
}