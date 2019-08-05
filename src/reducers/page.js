const page = (state = 1, action) => {
  switch (action.type) {
    case 'PREVIOUS_PAGE':
      return state - 1;
    case 'NEXT_PAGE':
      return state + 1;
    case 'FIRST_PAGE':
      return 1;
    default:
      return state;
  }
};

export default page;
