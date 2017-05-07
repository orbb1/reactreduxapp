import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

class TaskFilter extends Component {
    constructor(props) {
        super(props);

        this.filterTasks = this.filterTasks.bind(this);
    }
    filterTasks(e) {
        e.preventDefault();
        this.props.onFilter(this.refs.filterField.getValue());
    }

    render() {
        return (          
                <TextField hintText="Filter tasks" ref="filterField" onChange={ this.filterTasks }/>
            )
    }
}

export default connect(
    null,
    dispatch => ({
        onFilter: (taskName) => {
            dispatch({ type: "FILTER_TASKS", task: taskName })
        },
    })
)(TaskFilter);