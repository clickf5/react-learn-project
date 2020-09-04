import React from 'react';
import styles from './style.module.css';
import avatar from '../../../../../images/avatar.jpg';

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.avatar}>
        <img src={avatar} />
      </div>
      <div className={styles.message}>Message</div>
    </div>
  );
};
  
export default Post;