import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Profile from './Profile';
import Footer from './Footer';
import Dialogs from './Dialogs';
import News from './News';
import Music from './Music';
import Settings from './Settings';
import styles from './style.module.css';

const App = (props) => {
  const { addPost, changeNewPostText, state } = props;
  const { profilePage, dialogsPage, sidebar } = state;
  return (
    <BrowserRouter>
      <Header />
      <Navbar state={sidebar} />
      <main className={styles.content}>
        <Switch>
          <Route path="/dialogs" render={() => <Dialogs state={dialogsPage} />} />
          <Route path="/profile" render={() => <Profile state={profilePage} addPost={addPost} changeNewPostText={changeNewPostText} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
