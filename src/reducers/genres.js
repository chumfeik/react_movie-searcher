const genres = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GENRES':
        return {
          ...state,
          ...action.genres
        };
      default:
        return state;
    }
  };
  
  export default genres;
  