import React from 'react';
import Post from './Post';
import styles from './style.module.css';

const posts = [
  { id: 1, message: 'Hello!', like: 5 },
  { id: 1, message: 'Goodby!', like: 0 },
  { id: 1, message: "What's up!", like: 15 }
];

const postsElements = posts.map(({ message, like }) => <Post message={message} likeCount={like} />);

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
            {postsElements}
        </div>
    </div>
  );
};

export default MyPosts;
