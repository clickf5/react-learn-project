import React from 'react';
import styles from './style.module.css';
import avatar from '../../../../../images/avatar.jpg';

const Post = (props) => {
  const { message, likeCount = 0 } = props;
  return (
    <div className={styles.post}>
      <div className={styles.avatar}>
        <img src={avatar} />
      </div>
      <div className={styles.message}>{message}</div>
      <div className={styles.like}>{likeCount}</div>
    </div>
  );
};
  
export default Post;