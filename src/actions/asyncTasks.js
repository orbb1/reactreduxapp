const mockUpData = [
    {
        id: 123,
        taskName: 'do nothing',
        completed: false
    },
    {
        id: 345345,
        taskName: 'eat shit',
        completed: false
    },
    {
        id: 342,
        taskName: 'watch movie',
        completed: false
    }
];


export const asyncGetIt = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: "ASYNC_TASK", task: mockUpData
        })
    }, 1500)
}