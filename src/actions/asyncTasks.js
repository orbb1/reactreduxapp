export const asyncAction = () => dispatch => {
  dispatch({
    type: 'START_REQUEST',
    payload: null
  });

  return fetch('https://rrtodoapp.firebaseio.com/.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    method: 'get'
  }).then(response => response.json().then(body => {
    if (!response.ok) {
      dispatch({
        type: 'FAIL_REQUEST',
        payload: response.status
      });
    } else {
      dispatch({
        type: 'SUCCESS_REQUEST',
        payload: null
      });
      dispatch({
        type: 'ASYNC_TASK',
        payload: body.tasklist
      });
    }
  }))
    .catch(error => {
      dispatch({
        type: 'FAIL_REQUEST',
        payload: error
      });
      return error;
    })
}
