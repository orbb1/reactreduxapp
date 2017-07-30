import React from 'react';
import {Route, Link} from 'react-router-dom';
import './NavLink.scss';

export const NavLink = (props) => {
    return (
        <Route path={props.to} 
            exact={props.exact} 
            children={({match}) => <Link className={`Nav-Link ${match ? `link-active` : ``}`} 
                                        to={props.to}>{props.label}</Link>}/>
    )
}