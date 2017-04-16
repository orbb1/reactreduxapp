import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Route, HashRouter } from 'react-router-dom';

import App from './App';
import About from './components/About';
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);




// import { createStore } from 'redux';

// function tasklist(store = [], action ) {
//   switch (action.type) {
//     case "ADD_TASK":
//     return [
//       ...store, action.taskname
//     ]
//     default:
//     return store;
//   }
// }

// const store = createStore(tasklist);

// const addTaskButton = document.querySelectorAll('.addTask')[0];
// const inputTask = document.querySelectorAll('.inputTask')[0];
// const list = document.querySelectorAll('.taskList')[0];

// store.subscribe(
//   () => {
//     list.innerHTML = "";
//     inputTask.value = "";
//     store.getState().forEach(task => {
//       const li = document.createElement('li');
//       li.textContent = task;
//       list.appendChild(li);
//     })
//   }
// )

// addTaskButton.addEventListener('click', () => {
//   const task = inputTask.value;
//   store.dispatch({ type: 'ADD_TASK', taskname: task });
// })