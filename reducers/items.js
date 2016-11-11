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
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        upvotes: ++state.upvotes,
      });
    case 'DOWNVOTE_ITEM':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        downvotes: ++state.downvotes,
      });
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action),
      ];
    case 'UPVOTE_ITEM':
      return state.map(t =>
        item(t, action),
      );
    case 'DOWNVOTE_ITEM':
      return state.map(t =>
        item(t, action),
      );
    default:
      return state;
  }
};

export default items;

export const getFirstChoices = (items) => {
  let firstChoices = [];
  let bestScore = (items[0]) ? items[0].upvotes + items[0].downvotes : 0;

  items.forEach((item) => {
    const itemScore = item.upvotes - item.downvotes;
    if (itemScore > bestScore) {
      bestScore = itemScore;
      firstChoices = [];
      firstChoices.push(item.id);
    } else if (itemScore === bestScore) {
      firstChoices.push(item.id);
    }

    // If all the items have the same score, then none is the highest scoring
    if (firstChoices.length === items.length) {
      firstChoices.length = 0;
    }
  });

  return firstChoices;
};
