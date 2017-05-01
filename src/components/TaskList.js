import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from './Task';

import { asyncGetIt } from '../actions/asyncTasks';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
  }

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
            <Task key={index} childProp={task}/>
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
        taskName,
        completed : false
      }
      dispatch({ type: "ADD_TASK", task })
    },
    onFilter: (taskName) => {
      dispatch({ type: "FILTER_TASKS", task: taskName })
    },
    onGetIt: () => {
      dispatch(asyncGetIt());
    },
  })
)(TaskList);
