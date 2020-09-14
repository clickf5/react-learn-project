const store = {
  _subscriber() {
    console.log('no subscribers (observers)');
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello!', like: 9 },
        { id: 2, message: 'Vasya!', like: 9 },
        { id: 3, message: 'Everething ok!', like: 8 },
      ],
      newPostText: 'sdafasf',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Eugene' },
        { id: 3, name: 'Sandra' },
      ],
      messages: [
        { id: 1, message: 'msg1' },
        { id: 2, message: 'msg2' },
        { id: 3, message: 'msg3' },
      ],
    },
    sidebar: {
      friends: [
        { name: 'Vasya' },
        { name: 'Lena' },
        { name: 'Gevorg' },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._subscriber(this._state);
  },
  changeNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._subscriber(this._state);
  },
};

export default store;
