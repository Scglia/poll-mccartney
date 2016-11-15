const item = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text,
        upvotes: 0,
        downvotes: 0,
      };
    case 'UPVOTE_ITEM':
      return {
        ...state,
        upvotes: state.upvotes + 1,
      };
    case 'DOWNVOTE_ITEM':
      return {
        ...state,
        downvotes: state.downvotes + 1,
      };
    default:
      return state;
  }
};

export default item;
