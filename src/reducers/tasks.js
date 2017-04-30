const initialState = [];

export default function tasklist(state = initialState, action) {

    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state, action.task
            ];
            
        case "COMPLETE_TASK":
            return state.map(
                item => { 
                    if (item.id === action.task.id) {
                        item.completed = !item.completed;
                    } return item;
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