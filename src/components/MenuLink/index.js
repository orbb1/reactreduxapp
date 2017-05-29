import React from 'react';
import {Route, Link} from 'react-router-dom';

export const MenuLink = (props) => {
    return (
        <Route path={props.to} exact={props.exact} children={({match}) => <Link to={props.to}>{match 
            ? <strong>{props.label}</strong> 
            : props.label}</Link>}/>
    )
}