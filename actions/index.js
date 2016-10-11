let nextItemId = 0
export const addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    text
  }
}

export const upvoteItem = (id) => {
  return {
    type: 'UPVOTE_ITEM',
    id
  }
}

export const downvoteItem = (id) => {
  return {
    type: 'DOWNVOTE_ITEM',
    id
  }
}
