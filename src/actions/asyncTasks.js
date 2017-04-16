const mockUpData = [
    {
        id: 123,
        taskName: 'do nothing'
    },
    {
        id: 345345,
        taskName: 'eat shit'
    },
    {
        id: 342,
        taskName: 'watch movie'
    }
];


export const asyncGetIt = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: "ASYNC_TASK", task: mockUpData
        })
    }, 1500)
}