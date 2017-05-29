import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

class Task extends Component {
    constructor(props) {
        super(props);

        this.onToggleComplete = this.onToggleComplete.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    onToggleComplete(taskk) {
        this.props.toggleComplete(taskk);
    }

    removeTask(taskk) {
        this.props.onRemoveTask(taskk);
    }

    render() {
        const task = this.props.task;

        return (
            <div className="TaskList-Task">
                <span onClick={() => this.onToggleComplete(task)}> {task.completed ? <strike>{task.taskName}</strike> : task.taskName}</span>
                <RaisedButton className="TaskList-Button" label="Delete" onClick={() => this.removeTask(task)} />
            </div>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        onRemoveTask: (task) => {
            dispatch({type: "REMOVE_TASK", task})
        },
        toggleComplete: (task) => {
            dispatch({type: "COMPLETE_TASK", task})
        }
    })
)(Task);