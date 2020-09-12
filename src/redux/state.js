const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello!', like: 9 },
            { id: 2, message: 'Vasya!', like: 9 },
            { id: 3, message: 'Everething ok!', like: 8 }
        ],
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Eugene' },
            { id: 3, name: 'Sandra' }
        ],
          messages: [
            { id: 1, message: 'msg1' },
            { id: 2, message: 'msg2' },
            { id: 3, message: 'msg3' }
        ],
    },
    sidebar: {
        friends: [
            { name: 'Vasya' },
            { name: 'Lena' },
            { name: 'Gevorg' }
        ]
    }
  };

  export default state;
