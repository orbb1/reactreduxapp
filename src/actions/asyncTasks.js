export const asyncGetIt = () => dispatch => {

    return fetch('https://rrtodoapp.firebaseio.com/.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'get'
    }).then(response => response.json().then(body => ({response, body})))
        .then(({response, body}) => {
            if (!response.ok) {
                console.log('An error occured. Status:', response.status)
            } else {
                dispatch({
                    type: 'ASYNC_TASK',
                    task: body
                });
            }
        });
}