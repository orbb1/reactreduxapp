import { combineReducers } from 'redux';

import tasks from './tasks';
//import taskTypes from './taskTypes';
import taskFilter from './taskFilter';

export default combineReducers({
    tasks,
    //taskTypes,
    taskFilter
})