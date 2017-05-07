import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        e.preventDefault();
        this.props.onAddTask(this.refs.addTaskField.getValue())
    }

    render() {
        return (
            <form onSubmit={this.addTask}>
                <TextField className="el-inline" hintText="Write new task" ref="addTaskField"/>
                <RaisedButton label="Add task" type="submit"/>  
            </form>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        onAddTask: (taskName) => {
            const task = {
                id : Number(Date.now().toString()),
                taskName
            }
            dispatch({ type: "ADD_TASK", task })
        }
    })
)(AddTaskForm);