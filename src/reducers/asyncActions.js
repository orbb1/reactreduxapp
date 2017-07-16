const initialState = {isFetching: false}

export default function asyncActions(state = initialState, action) {
    switch(action.type) {
        case 'START_REQUEST':
        return Object.assign({}, state, {isFetching: true});

        case 'SUCCESS_REQUEST':
        return Object.assign({}, state, {isFetching: false});

        case 'FAIL_REQUEST':
        console.log('Request error', action.payload);
        return state;

        default:
        return state;
    }
}