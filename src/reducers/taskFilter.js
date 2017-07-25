const initialState = { filterProp: window.localStorage.filterProperty || '', completed: false};

export default function taskFilter(state = initialState, action) {
    if (action.type === "FILTER_TASKS") {
        return Object.assign({}, state, { filterProp: action.payload });
    } else if (action.type === "TOGGLE_COMPLETED") {
        return Object.assign({}, state, { completed: action.payload });
    }
    return state;
}