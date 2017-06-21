import taskFilter from '../src/reducers/taskFilter';
import taskList from '../src/reducers/tasks';
import {asyncGetIt} from '../src/actions/asyncTasks';

const initialState = [];

test('returning filter property', () => {
    let action = {
        type: "FILTER_TASKS",
        task: "keyword"
    }
    expect(taskFilter(initialState, action)).toBe('keyword')
})

describe('empty payload', () => {
    it('return initial state', () => {
        let action = {
            type: undefined,
            task: undefined
        }
        expect(taskList(initialState, action)).toEqual(initialState);
    })
})

describe('task actions', () => {
    it('add new task to state', () => {
        let action = {
            type: 'ADD_TASK',
            task: {
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
            task: localInitialState[0]
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
            task: localInitialState[0]
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