import React from 'react';
import {Link} from 'react-router-dom';

import './Menu.css';

export const Menu = () => {

    return (
        <div className="Header-Container container">
            <div className="Header-Item">
                <Link to="/">Tasklist</Link>
            </div>
            <div className="Header-Item">
                <Link to="/about">About</Link>                    
            </div>
        </div>
    )
}