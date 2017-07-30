import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilteredTasks } from '../../selectors/reselect';
import { AddTaskForm } from '../../components/Add-task-form/';
import Task from '../../components/Task/';
import { TaskFilter } from '../../components/TaskFilter/';
import { AsyncTasks } from '../../components/AsyncTasks/';
import { asyncAction } from '../../actions/asyncTasks';
import { RouteTransition } from 'react-router-transition';

import './TaskList.scss';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.newTaskInputChange = this.newTaskInputChange.bind(this);
    this.filterTasksInputchange = this.filterTasksInputchange.bind(this);
    this.onValidate = this.onValidate.bind(this);

    this.state = {
      newTaskName: '',
      isFetching: this.props.isFetching,
      validInput: false,
      validationError: null
    };
  }

  filterTasksInputchange(e) {
    e.preventDefault();
    window.localStorage.filterProperty = e.target.value;
    this.props.onFilter(e.target.value)
  }

  addTask(e) {
    e.preventDefault();
    this.props.onAddTask(this.state.newTaskName);
    this.setState({ newTaskName: '' });
  }

  onValidate(word) {
    let pattern = /(^[A-Za-z0-9])/;
    pattern.test(word) 
      ? word.length > 4 
        ? this.setState({ validInput: true, validationError: null }) 
        : this.setState({ validInput: false, validationError: 'your task is too short' })
      : this.setState({ validInput: false, validationError: 'task sould start with letter or number' });
    word.length === 0 && this.setState({ validInput: false, validationError: null });
  }

  newTaskInputChange(e) {
    this.onValidate(e.target.value);
    this.setState({ newTaskName: e.target.value });
  }

  toggleCompleted = (e, b) => {
    this.props.onToggle(b);
  }

  render() {

    return (
      <RouteTransition
        pathname={location.pathname}
        atEnter={{ translateX: -100 }}
        atLeave={{ translateX: 100 }}
        atActive={{ translateX: 0 }}
        mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}>
        <div className="container">
          {this.props.isFetching && <p>Recieving tasks...</p>}
          <div className="TaskList-form">
            <AddTaskForm errorMessage={this.state.validationError} validInput={this.state.validInput} newTaskName={this.state.newTaskName} handleSubmit={this.addTask} handleChange={this.newTaskInputChange} />
          </div>
          <div className="TaskList-form">
            <TaskFilter toggleCompleted={this.toggleCompleted} hanleFilterChange={this.filterTasksInputchange} />
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
      </RouteTransition>
    );
  }
}

export default connect(
  state => ({
    tasks: getFilteredTasks(state),
    isFetching: state.asyncActions.isFetching
  }),
  dispatch => ({
    onAddTask: (taskName) => {
      const task = {
        id: Number(Date.now().toString()),
        taskName,
        completed: false
      }
      dispatch({ type: "ADD_TASK", payload: task })
    },
    onGetIt: () => {
      dispatch(asyncAction());
    },
    onFilter: (taskName) => {
      dispatch({ type: "FILTER_TASKS", payload: taskName })
    },
    onToggle: (complete) => {
      dispatch({ type: "TOGGLE_COMPLETED", payload: complete })
    }
  })
)(TaskList);
