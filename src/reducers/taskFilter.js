const initialState = '';

export default function taskFilter (state = initialState, action) {
    if (action.type === "FILTER_TASKS") {
        return action.task;
    }
    return state;
}