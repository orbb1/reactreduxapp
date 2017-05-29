import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export const AddTaskForm = (props) =>{

    return (
        <form onSubmit={props.handleSubmit}>
            <TextField className="el-inline" hintText="Min 3 characters" onChange={props.handleChange}/>
            <RaisedButton label="Add task" type="submit"/>  
        </form>
    )
}