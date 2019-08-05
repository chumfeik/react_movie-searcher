const searchResult = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESULT':
      return {
        ...state,
        ...action.result
      };
    default:
      return state;
  }
};

export default searchResult;
