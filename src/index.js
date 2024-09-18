import React from 'react';
 //import ReactDOM from 'react-dom'; //The new way to import createRoot:
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
import { searchRobots } from './reducers';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
//import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const store = configureStore({reducer:searchRobots},applyMiddleware(logger));
const root = createRoot(document.getElementById('root'));
root.render(
          <Provider store={store}>
          <App />
          </Provider>);


/*ReactDOM.render(<Provider store={store}>
          <App />
          </Provider> , document.getElementById('root'));
registerServiceWorker();*/