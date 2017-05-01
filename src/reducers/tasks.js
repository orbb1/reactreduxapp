const initialState = [];

export default function tasklist(state = initialState, action) {

    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state, action.task
            ];
        
        case "REMOVE_TASK": 
            let taskIndex = state.indexOf(action.task);
            return state.slice(0, taskIndex)
                        .concat(state.slice(taskIndex + 1, state.length));
            
        case "COMPLETE_TASK":
            return state.map(
                item => { 
                    if (item.id === action.task.id) {
                        item.completed = !item.completed;
                    } 
                    return item;
                }
            );
        
        case "ASYNC_TASK":
            return [
                ...state, ...action.task
            ];

        default:
        return state; 
    }
}