import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Route, HashRouter } from 'react-router-dom';

import TaskManager from './components/TaskManager/index';
import About from './components/About/index';
import Menu from './components/Menu';
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Menu/>
        <Route exact path="/" component={TaskManager}/>
        <Route path="/about" component={About}/>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);