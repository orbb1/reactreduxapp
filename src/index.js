import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import { RouteTransition } from 'react-router-transition';

// TapEventPlugin for Material Ui
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//Material Ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TaskList from './containers/TaskList/index';
import About from './containers/About/index';
import {Nav} from './components/Nav';
import './index.scss';

let middleware = [logger, thunk]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Nav/>
          <RouteTransition 
            runOnMount={true}
            pathname={location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}>
            <Route exact path="/" component={TaskList}/>
            <Route path="/about" component={About}/>
          </RouteTransition>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);