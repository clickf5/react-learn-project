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
import styles from './style.module.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <main className={styles.content}>
        <Switch>
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
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
