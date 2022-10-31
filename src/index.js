import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// redux Store
import { Provider } from 'react-redux';
import store from './store/apiSlice';

// RTK query
import { productApi } from './store/apiSlice/apiSlice';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={productApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
);
