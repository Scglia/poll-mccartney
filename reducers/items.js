import { combineReducers } from 'redux';

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

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'UPVOTE_ITEM':
    case 'DOWNVOTE_ITEM':
    case 'ADD_ITEM':
      return {
        ...state,
        [action.id]: item(state[action.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.id];
    default:
      return state;
  }
};

const items = combineReducers({
  byId,
  allIds,
});

export default items;

const getAllItems = (items) => {
  return items.allIds.map(id => items.byId[id]);
};

export { getAllItems };

/**
 * returns the highest scoring items
 * @param {Array} items
 * @return {Array} item.id
 */
export const getFirstChoices = (state) => {
  const items = getAllItems(state);
  let firstChoices = [];
  let bestScore = (items[0]) ? items[0].upvotes - items[0].downvotes : 0;

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
