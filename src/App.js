import React from 'react';
import './App.css';
import profileBackground from './images/qXGZxSSiA5g.jpg';
const App = () => {
  return (
    <>
      <header className="header">
        Здесь должен быть логотип
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        <div className="profile-background">
          <img src={profileBackground} />
        </div>
        <div>ava + description</div>
        <div>my post</div>
        <div>new post</div>
        <div>new post</div>
        <div>new post</div>
      </main>
      <footer className="footer">
        А здесь копирайт
      </footer>
    </>
  );
};

export default App;
