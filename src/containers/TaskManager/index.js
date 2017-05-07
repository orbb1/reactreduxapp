import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTaskForm from '../../components/Add-task-form/';
import Task from '../../components/Task/';
import TaskFilter from '../../components/TaskFilter/';
import AsyncTasks from '../../components/AsyncTasks/';

import './TaskManager.css';

class TaskManager extends Component {

  render() {
    return (
      <div className="TaskList-Container container">
        <div className="TaskList-Form">
          <AddTaskForm />
        </div>
        <div className="TaskList-Form">
          <TaskFilter />
        </div>
        <div>
          <AsyncTasks />
        </div>
        <ul className="TaskList-Tasks">
          {this.props.tasks.map((task, index) => 
            <Task key={ index } task={ task } completed={ task.completed }/>
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
  dispatch => ({})
)(TaskManager);
