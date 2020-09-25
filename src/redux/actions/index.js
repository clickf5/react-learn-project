export const addPost = () => ({
  type: 'ADD-POST',
});

export const updateNewPostText = (text) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  payload: {
    text,
  },
});
