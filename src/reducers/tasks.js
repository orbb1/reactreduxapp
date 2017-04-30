const initialState = [];


export default function tasklist(state = initialState, action) {
    if (action.type === "ADD_TASK") {
        console.log("adding task", state);
        return [
            ...state, action.task
        ];
    } else if (action.type === "COMPLETE_TASK") {
        console.log("Complete task", state);
        return action.task.completed = !action.task.completed;
    } else if (action.type === "ASYNC_TASK") {
        console.log("Async task", state);
        return [
            ...state, ...action.task
        ];
    } else {
        return state;
    }
}