const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    { id: 1, message: 'Hello!', like: 9 },
    { id: 2, message: 'Vasya!', like: 9 },
    { id: 3, message: 'Everething ok!', like: 8 },
  ],
  newPostText: 'Новый пост',
};

export default (state = initialState, action) => {
  const { posts } = state;
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      posts.push(newPost);
      return { ...state, posts };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.payload.text };
    default:
      return state;
  }
};
