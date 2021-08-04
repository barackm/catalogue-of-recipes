import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import createStore from './store/createStore';

import './assets/css/main.css';
import './assets/css/header.css';
import './assets/css/home.css';
import './assets/css/reciples.css';
import './assets/css/recipleDetails.css';
import './assets/css/footer.css';

const store = createStore();
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
