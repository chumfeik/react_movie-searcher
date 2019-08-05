const details = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return {
          ...state,
          ...action.details
        };
      default:
        return state;
    }
  };
  
  export default details;
  