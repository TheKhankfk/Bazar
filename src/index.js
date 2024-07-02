//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import { app } from './firebase.config';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from "./redux/store"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from "react-toastify"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} app={app}>
      <PersistGate loading={"loading"} persistor={persistor}>
      <App />
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </PersistGate>
    </Provider>
);
