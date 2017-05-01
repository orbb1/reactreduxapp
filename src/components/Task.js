import React, { Component } from 'react';
import { connect } from 'react-redux';

class Task extends Component {
    constructor(props) {
        super(props);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    toggleComplete(taskk) {
        this.props.onToggleComplete(taskk);
    }

    removeTask(taskk) {
        this.props.onRemoveTask(taskk);
    }

    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => this.toggleComplete(this.props.childProp)}>X</button>
                <span>{this.props.childProp.taskName}</span>
                <p>Task status: {this.props.childProp.completed ? "done" : "not done"}</p>
                <button onClick={() => this.removeTask(this.props.childProp)}>remove</button>
            </div>
        )
    }
}

export default connect(
    state => ({
        task: state.childProp
    }),
    dispatch => ({

        onRemoveTask: (task) => {
            dispatch({ type: "REMOVE_TASK", task })
        },

        onToggleComplete: (task) => {
            dispatch({ type: "COMPLETE_TASK", task })
        }
    })
)(Task);;