import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { asyncGetIt } from '../../actions/asyncTasks';
import AddTaskForm from '../../components/Add-task-form/';

import './TaskManager.css';

class TaskManager extends Component {
  constructor(props) {
    super(props);

    this.filterTasks = this.filterTasks.bind(this);
    this.onToggleComplete = this.onToggleComplete.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(taskk) {
    this.props.onRemoveTask(taskk);
  }

  filterTasks(e) {
    e.preventDefault();
    this.props.onFilter(this.refs.filterField.getValue());
  }

  onToggleComplete(taskk) {
    this.props.toggleComplete(taskk);
  }
  
  render() {
    return (
      <div className="TaskList-Container container">
          <AddTaskForm />
        <div className="TaskList-Form">
          <TextField hintText="Filter tasks" ref="filterField" onChange={this.filterTasks}/>
        </div>
        <div className="TaskList-Async">
          <RaisedButton label="Get tasks" onClick={ this.props.onGetIt }/>
        </div>
        <ul className="TaskList-Tasks">
          {this.props.tasks.map((task, index) => 
            <div className="TaskList-Task" key={ index }>
              <span onClick={() => this.onToggleComplete(task)}> { task.completed ? <strike>{task.taskName}</strike> : task.taskName }</span>
              <RaisedButton className="TaskList-Button" label="Delete" onClick={() => this.removeTask(task)}/>
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
