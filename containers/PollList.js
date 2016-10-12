import React from 'react'
import { connect } from 'react-redux'
import { upvoteItem, downvoteItem } from '../actions'
import PollItem from '../components/PollItem'

const mapStateToProps = (state) => {

  let items = state.items;
  let firstChoices = [];
  let bestScore = (items[0]) ? items[0].upvotes + items[0].downvotes : 0;
  items.forEach((item, index) => {
    let itemScore = item.upvotes + item.downvotes;
    if(itemScore > bestScore) {
      bestScore = itemScore
      firstChoices = [];
      firstChoices.push(item.id);
    }
    else if(itemScore == bestScore){
      firstChoices.push(item.id);
    }
  });

  return {
    items: items,
    firstChoices : firstChoices
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpvote: (id) => {
      dispatch(upvoteItem(id))
    },
    onDownvote: (id) => {
      dispatch(downvoteItem(id))
    }
  }
}

let PollList = ({ items, firstChoices, onUpvote, onDownvote }) => {
  return (
    <ul className="pollList">
      {items.map(item =>
        <PollItem
          key={item.id}
          onUpvote={() => onUpvote(item.id)}
          onDownvote={() => onDownvote(item.id)}
          isFirst={firstChoices.includes(item.id)}
          {...item}
        />
      )}
    </ul>
)}

PollList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollList)

export default PollList
