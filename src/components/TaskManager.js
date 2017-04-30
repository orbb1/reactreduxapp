import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncGetIt } from '../actions/asyncTasks';

class TaskManager extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
    this.onToggleComplete = this.onToggleComplete.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask() {
    this.props.onAddTask(this.taskInput.value)
  }

  removeTask(taskk) {
    this.props.onRemoveTask(taskk);
  }

  filterTasks() {
    this.props.onFilter(this.filterInput.value);
  }

  onToggleComplete(taskk) {
    this.props.toggleComplete(taskk);
  }
  
  render() {
    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.taskInput = input }}/>
          <button onClick={this.addTask} >Add Task</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.filterInput = input }}/>
          <button onClick={this.filterTasks} >Filter</button>
        </div>
        <div>
          <button onClick={ this.props.onGetIt }>get it</button>
        </div>
        <ul>
          {this.props.tasks.map((task, index) => 
            <div key={ index }>
              <button onClick={() => this.onToggleComplete(task)}>X</button>
              <span> { task.taskName }</span>
              <p>Task status: { task.completed ? "done" : "not done" }</p>
              <button onClick={() => this.removeTask(task)}>remove</button>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks.filter(task => task.taskName.includes(state.taskFilter))
  }),
  dispatch => ({
    onAddTask: (taskName) => {
      const task = {
        id : Number(Date.now().toString()),
        taskName
      }
      dispatch({ type: "ADD_TASK", task })
    },

    onRemoveTask: (task) => {
      dispatch({ type: "REMOVE_TASK", task })
    },

    onFilter: (taskName) => {
      dispatch({ type: "FILTER_TASKS", task: taskName })
    },
    onGetIt: () => {
      dispatch(asyncGetIt());
    },
    toggleComplete: (task) => {
        dispatch({ type: "COMPLETE_TASK", task })
    }
  })
)(TaskManager);
