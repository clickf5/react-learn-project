const initialState = {
  friends: [
    { name: 'Vasya' },
    { name: 'Lena' },
    { name: 'Gevorg' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
