import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export const AddTaskForm = (props) =>{

    return (
        <form onSubmit={props.handleSubmit}>
            <TextField errorText={props.errorMessage} className="el-inline" hintText="Min 5 characters" value={props.newTaskName} onChange={props.handleChange}/>
            <RaisedButton disabled={!props.validInput} label="Add task" type="submit"/>  
        </form>
    )
}