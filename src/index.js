import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger'

// TapEventPlugin for Material Ui
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//Material Ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TaskManager from './containers/TaskManager/index';
import About from './containers/About/index';
import {Menu} from './components/Menu';
import './index.scss';

let middleware = [logger, thunk]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Menu/>
          <Route exact path="/" component={TaskManager}/>
          <Route path="/about" component={About}/>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);