import React from 'react';
import Post from './Post';
import styles from './style.module.css';

const MyPosts = () => {
  return (
    <div className={styles.my_posts}>
        <div className={styles.controls}>
            <div>
              <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        My posts:
        <div className={styles.posts}>
            <Post message="Hello!" likeCount="5" />
            <Post message="Goodby!" />
            <Post message="What's up!" likeCount="15" />
        </div>
    </div>
  );
};

export default MyPosts;
