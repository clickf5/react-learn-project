import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const dialogs = [
  { id: 1, name: 'Andrey' },
  { id: 2, name: 'Eugene' },
  { id: 3, name: 'Sandra' }
];

const messages = [
  { id: 1, message: 'msg1' },
  { id: 2, message: 'msg1' },
  { id: 3, message: 'msg1' }
];

const posts = [
  { id: 1, message: 'Hello!', like: 5 },
  { id: 1, message: 'Goodby!', like: 0 },
  { id: 1, message: "What's up!", like: 15 }
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
