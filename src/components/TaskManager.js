import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncGetIt } from '../actions/asyncTasks';

class TaskManager extends Component {

  addTask() {
    this.props.onAddTask(this.taskInput.value)
  }

  filterTasks() {
    this.props.onFilter(this.filterInput.value);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.taskInput = input }}/>
          <button onClick={this.addTask.bind(this)} >Add Task</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.filterInput = input }}/>
          <button onClick={this.filterTasks.bind(this)} >Filter</button>
        </div>
        <div>
          <button onClick={ this.props.onGetIt }>get it</button>
        </div>
        <ul>
          {this.props.tasks.map((task, index) => 
            <div key={ index }>
              <span onClick={ this.props.toggleComplete(task) }>{ task.completed ? "X" : "[]" }</span>
              <span> { task.taskName }</span>
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
        id : Date.now().toString(),
        taskName
      }
      dispatch({ type: "ADD_TASK", task })
    },
    onFilter: (taskName) => {
      dispatch({ type: "FILTER_TASKS", task: taskName })
    },
    onGetIt: () => {
      dispatch(asyncGetIt());
    },
    toggleComplete: (todo) => {
        dispatch({ type: "COMPLETE_TASK", task: todo })
    }
  })
)(TaskManager);
