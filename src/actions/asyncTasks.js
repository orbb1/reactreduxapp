const mockUpData = [
    {
        id: 123,
        taskName: 'Do nothing',
        completed: false
    },
    {
        id: 345345,
        taskName: 'Eat breakfast',
        completed: false
    },
    {
        id: 342,
        taskName: 'Watch movie',
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