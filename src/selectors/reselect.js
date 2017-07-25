import { createSelector } from 'reselect';

const taskSelector = state => state.tasks;
const filterSelector = state => state.taskFilter; 
const onTaskFilter = (tasks, taskFilter) => 
    tasks
        .filter(task => task.taskName.toLowerCase().includes(taskFilter.filterProp.toLowerCase()))
        .filter(task => taskFilter.completed === true ? true : task.completed === false);

export const getFilteredTasks = createSelector(
    taskSelector,
    filterSelector,
    onTaskFilter
)