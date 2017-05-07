import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
    render() {
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
}

export default Menu;