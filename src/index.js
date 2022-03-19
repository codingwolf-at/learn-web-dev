import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { LibraryProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <LibraryProvider>
      <Router>
        <App />
      </Router>
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);