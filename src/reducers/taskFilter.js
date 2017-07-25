const initialState = { filterProp: window.localStorage.filterProperty || '', completed: false};

export default function taskFilter(state = initialState, action) {
    switch(action.type) {
        case "FILTER_TASKS":
        return Object.assign({}, state, { filterProp: action.payload });
 
        case "TOGGLE_COMPLETED":
        return Object.assign({}, state, { completed: action.payload });

        default:
        return state;
    }
}