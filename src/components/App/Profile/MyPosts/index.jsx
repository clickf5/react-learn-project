import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import * as actions from '../../../../redux/actions';
import styles from './style.module.css';

const mapStateToProps = (state) => ({ profile: state.profile });
const mapDispatchToProps = {
  addPost: actions.addPost,
  updateNewPostText: actions.updateNewPostText,
};

const MyPosts = (props) => {
  const {
    profile: { posts, newPostText }, addPost, updateNewPostText, dispatch,
  } = props;
  const newPostElement = React.createRef();

  const addPostHandle = () => {
    // dispatch({ type: 'ADD-POST' });
    // dispatch({ type: 'UPDATE-NEW-POST-TEXT', payload: { text: '' } });
    addPost();
    updateNewPostText('');
  };

  const onChange = () => {
    const text = newPostElement.current.value;
    updateNewPostText(text);
    // dispatch({ type: 'UPDATE-NEW-POST-TEXT', payload: { text } });
  };

  const postsElements = posts.map(({ message, like, id }) => <Post key={id} message={message} likeCount={like} />);
  return (
    <div className={styles.my_posts}>
      <div className={styles.controls}>
        <div>
          <textarea ref={newPostElement} onChange={onChange} value={newPostText} />
        </div>
        <button onClick={addPostHandle}>Add post</button>
      </div>
      My posts:
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
