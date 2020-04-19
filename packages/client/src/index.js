import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
