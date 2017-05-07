import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { asyncGetIt } from '../../actions/asyncTasks';

class AsyncTasks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <RaisedButton label="Get tasks" onClick={ this.props.onGetIt }/>
    }
}

export default connect(
  null,
  dispatch => ({
    onGetIt: () => {
      dispatch(asyncGetIt());
    }
  })
)(AsyncTasks);