import {combineReducers} from 'redux';

import tasks from './tasks';
import taskFilter from './taskFilter';
import asyncActions from './asyncActions';

export default combineReducers({
    tasks,
    taskFilter,
    asyncActions
})