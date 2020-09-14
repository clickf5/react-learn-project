import React from 'react';
import Post from './Post';
import styles from './style.module.css';

const MyPosts = (props) => {
  const { state } = props;
  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
    props.changeNewPostText('');
  };

  const onChange = () => {
    const text = newPostElement.current.value;
    props.changeNewPostText(text);
  };

  const { posts, newPostText } = state;
  const postsElements = posts.map(({ message, like, id }) => <Post key={id} message={message} likeCount={like} />);
  return (
    <div className={styles.my_posts}>
      <div className={styles.controls}>
        <div>
          <textarea ref={newPostElement} onChange={onChange} value={newPostText} />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
        My posts:
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
