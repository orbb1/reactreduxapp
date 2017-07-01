import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilteredTasks } from '../../selectors/reselect';
import { AddTaskForm } from '../../components/Add-task-form/';
import Task from '../../components/Task/';
import { TaskFilter } from '../../components/TaskFilter/';
import { AsyncTasks } from '../../components/AsyncTasks/';
import { asyncGetIt } from '../../actions/asyncTasks';

import './TaskList.scss';

class TaskList extends Component {
  constructor(props) {
      super(props);

      this.addTask = this.addTask.bind(this);
      this.newTaskInputChange = this.newTaskInputChange.bind(this);
      this.filterTasksInputchange = this.filterTasksInputchange.bind(this);

      this.state = {
          newTaskName: ''
      };
  }

  filterTasksInputchange(e) {
      e.preventDefault();
      this.props.onFilter(e.target.value)
  }

  addTask(e) {
      e.preventDefault();
      this.state.newTaskName.length > 3
        && this.props.onAddTask(this.state.newTaskName)
  }

  newTaskInputChange(e) {
      this.setState({ newTaskName: e.target.value });
  }

  render() {

    return (
      <div className="container">
        <div className="TaskList-form">
          <AddTaskForm handleSubmit={this.addTask} handleChange={this.newTaskInputChange} />
        </div>
        <div className="TaskList-form">
          <TaskFilter hanleFilterChange={this.filterTasksInputchange} />
        </div>
        <div>
          <AsyncTasks onGetIt={this.props.onGetIt} />
        </div>
        <ul className="TaskList-tasks">
          {this.props.tasks.map((task, index) =>
            <Task key={index} task={task} completed={task.completed} />
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: getFilteredTasks(state)
  }),
  dispatch => ({
    onAddTask: (taskName) => {
      const task = {
        id: Number(Date.now().toString()),
        taskName
      }
      dispatch({ type: "ADD_TASK", task })
    },
    onGetIt: () => {
      dispatch(asyncGetIt());
    },
    onFilter: (taskName) => {
      dispatch({ type: "FILTER_TASKS", task: taskName })
    },
  })
)(TaskList);
