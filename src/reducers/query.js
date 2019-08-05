const query = (state = 'captain', action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.text;
    case 'CLEAR':
      return '';
    default:
      return state;
  }
};

export default query;
