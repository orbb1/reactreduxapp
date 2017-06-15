import taskFilter from '../src/reducers/taskFilter';

test('returning filter property', () => {
    let action = {
        type: "FILTER_TASKS",
        task: "asdf"
    }
    expect(taskFilter('', action)).toBe('asdf')
})