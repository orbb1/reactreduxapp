import React from 'react';
import { TextField, Checkbox } from 'material-ui';

export const TaskFilter = (props) => {

    return (
        <div>      
            <TextField value={ window.localStorage.filterProperty || '' } hintText="Filter tasks" onChange={ props.hanleFilterChange }/>
            <Checkbox defaultChecked={ false } label="completed" onCheck={ props.toggleCompleted }/>
        </div>
    )
}
