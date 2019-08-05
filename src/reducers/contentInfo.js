const contentInfo = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONTENT_INFO':
      return {
        ...state,
        id: action.id,
        media_type: action.media_type,
        genres: action.genres
      };
    default:
      return state;
  }
};

export default contentInfo;
