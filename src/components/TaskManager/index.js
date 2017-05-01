import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncGetIt } from '../../actions/asyncTasks';

import './TaskManager.css';

class TaskManager extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
    this.onToggleComplete = this.onToggleComplete.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    this.props.onAddTask(this.taskInput.value)
  }

  removeTask(taskk) {
    this.props.onRemoveTask(taskk);
  }

  filterTasks(e) {
    e.preventDefault();
    this.props.onFilter(this.filterInput.value);
  }

  onToggleComplete(taskk) {
    this.props.toggleComplete(taskk);
  }
  
  render() {
    return (
      <div className="TaskList-Container container">
        <div className="TaskList-Form">
          <form onSubmit={this.addTask}>
            <input className="TaskList-Input" 
                  type="text" 
                  ref={(input) => { this.taskInput = input }} 
                  placeholder="Write new task"/>
          </form>
        </div>
        <div className="TaskList-Form">
          <form onSubmit={this.filterTasks}>
            <input className="TaskList-Input" 
                  type="text" 
                  ref={(input) => { this.filterInput = input }} 
                  placeholder="Filter"/>
          </form>
        </div>
        <div className="TaskList-Async">
          <button className="TaskList-Button" onClick={ this.props.onGetIt }>Get tasks</button>
        </div>
        <ul className="TaskList-Tasks">
          {this.props.tasks.map((task, index) => 
            <div className="TaskList-Task" key={ index }>
              <span onClick={() => this.onToggleComplete(task)}> { task.completed ? <strike>{task.taskName}</strike> : task.taskName }</span>
              <button className="TaskList-Button" onClick={() => this.removeTask(task)}>X</button>
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
