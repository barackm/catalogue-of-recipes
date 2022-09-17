import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
import App from './components/App';
import createStore from './store/createStore';

import './assets/css/main.css';
import './assets/css/header.css';
import './assets/css/home.css';
import './assets/css/recipes.css';
import './assets/css/recipeDetails.css';
import './assets/css/footer.css';

// axios.defaults.baseURL = 'https://sweetaromas.herokuapp.com';
// axios.defaults.headers.common.Authorization = localStorage.getItem('token');
// this will create a common header for all api calls

const store = createStore();

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
