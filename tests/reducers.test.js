import taskFilter from '../src/reducers/taskFilter';
import taskList from '../src/reducers/tasks';

import {asyncAction} from '../src/actions/asyncTasks';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const initialState = [];

test('returning filter property', () => {
    let action = {
        type: "FILTER_TASKS",
        task: "keyword"
    }
    expect(taskFilter(initialState, action)).toBe(action.payload)
})

describe('empty payload', () => {
    it('return initial state', () => {
        let action = {}
        expect(taskList(initialState, action)).toEqual(initialState);
    })
})

describe('task actions', () => {
    it('add new task to state', () => {
        let action = {
            type: 'ADD_TASK',
            payload: {
                id: 1234,
                taskName: 'new task'
            }
        };

        expect(taskList(initialState, action)).toEqual([{id: 1234, taskName: 'new task'}])
    })

    it('should remove task', () => {
        let localInitialState = [{
            id: 123,
            taskName: 'task to remove'
        }];

        let action = {
            type: 'REMOVE_TASK',
            payload: localInitialState[0]
        }

        expect(taskList(localInitialState, action)).toEqual(initialState)
    })

    it('should complete task', () => {
        let localInitialState = [{
            id: 12345,
            taskName: 'task to complate',
            completed: false
        }, {
            id: 123456,
            taskName: 'task to not complate',
            completed: false
        }];

        let action = {
            type: 'COMPLETE_TASK',
            payload: localInitialState[0]
        };

        let expectedState = [{
            id: 12345,
            taskName: 'task to complate',
            completed: true
        }, {
            id: 123456,
            taskName: 'task to not complate',
            completed: false
        }];

        expect(taskList(localInitialState, action)).toEqual(expectedState)
    })
})

it('send request and dispatch actions in proper order', () => {
    const store = mockStore({})

    return store.dispatch(asyncAction()).then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(3);
        expect(actions[0].type).toBe('START_REQUEST');
        expect(actions[1].type).toBe('SUCCESS_REQUEST');
        expect(actions[2].type).toBe('ASYNC_TASK');
    })
})