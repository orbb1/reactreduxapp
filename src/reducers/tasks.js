const initialState = [];


export default function tasklist(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASK":
        return [
            ...state, action.task
        ];

        case "ASYNC_TASK":
        return action.task;

        case "COMPLETE_TASK":
        console.log("fsdfdsf");
        return action.task.completed = !action.task.completed;

        default:
            return state;
    }
}