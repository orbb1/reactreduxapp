import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Route, HashRouter } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Menu from './components/Menu';
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Menu/>
        <hr/>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);