import React from 'react';
import TextField from 'material-ui/TextField';

export const TaskFilter = (props) => {

    return (          
        <TextField hintText="Filter tasks" onChange={ props.hanleFilterChange }/>
    )
}
