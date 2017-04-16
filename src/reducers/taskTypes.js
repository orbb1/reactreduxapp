const initialState = [
    'hobby',
    'work'
];

export default function tasklist(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASKTYPE":
            return state;
            break;
        default:
            return state;
    }
}