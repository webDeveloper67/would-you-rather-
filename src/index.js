import React from 'react';
import ReactDOM from 'react-dom';

// react-bootstrap CSS
import './bootstrap.min.css';

import './index.css';
import App from './components/App';


// Redux
import reducers from './reducers';
import middleware from './middleware';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


