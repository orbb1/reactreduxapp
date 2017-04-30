const initialState = [];

export default function tasklist(state = initialState, action) {

    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state, action.task
            ];
            
        case "COMPLETE_TASK":
            return action.task.completed = !action.task.completed;

        case "ASYNC_TASK":
            return [
                ...state, ...action.task
            ];

        default:
        return state; 
    }
}