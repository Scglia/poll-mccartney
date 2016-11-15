let nextItemId = 0
export const addItem = text => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  text,
});

export const upvoteItem = id => ({
  type: 'UPVOTE_ITEM',
  id,
});

export const downvoteItem = id => ({
  type: 'DOWNVOTE_ITEM',
  id,
});
