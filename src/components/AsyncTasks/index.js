import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export const AsyncTasks = (props) => {

    return <RaisedButton label="Get tasks" onClick={props.onGetIt}/>
}