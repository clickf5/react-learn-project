import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


const state = {
  dialogs: [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Eugene' },
    { id: 3, name: 'Sandra' }
  ],
  posts: [
    { id: 1, message: 'Hello!', like: 9 },
    { id: 2, message: 'Vasya!', like: 9 },
    { id: 3, message: 'Everething ok!', like: 8 }
  ],
  messages: [
    { id: 1, message: 'msg1' },
    { id: 2, message: 'msg2' },
    { id: 3, message: 'msg3' }
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
