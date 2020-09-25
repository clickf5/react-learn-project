import React from 'react';
import { connect } from 'react-redux';
import styles from './style.module.css';

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
});

const Sidebar = (props) => {
  const { sidebar: { friends } } = props;
  const items = friends.map((friend) => (
    <div className={styles.friend}>
      <div className={styles.ava} />
      <div className={styles.name}>{friend.name}</div>
    </div>
  ));
  return (
    <div className={styles.sidebar}>
      <div><h3>Friends:</h3></div>
      <div className={styles.friends}>
        {items}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Sidebar);
