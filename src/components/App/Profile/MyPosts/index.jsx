import React from 'react';
import Post from './Post';
import styles from './style.module.css';

const postsElements = (posts) => posts.map(({ message, like }) => <Post message={message} likeCount={like} />);

const MyPosts = (props) => {
  const {posts} = props;
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
            {postsElements(posts)}
        </div>
    </div>
  );
};

export default MyPosts;
