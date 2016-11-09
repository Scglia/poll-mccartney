import React from 'react'
import { connect } from 'react-redux'
import { upvoteItem, downvoteItem } from '../actions'
import PollItem from '../components/PollItem'

/**
 * returns the highest scoring items
 * @param {Array} items
 * @return {Array} item.id
 */
const getFirstChoices= (items) => {
  let firstChoices = [];
  let bestScore = (items[0]) ? items[0].upvotes + items[0].downvotes : 0;

  items.forEach((item, index) => {
    let itemScore = item.upvotes - item.downvotes;
    if(itemScore > bestScore) {
      bestScore = itemScore
      firstChoices = [];
      firstChoices.push(item.id);
    }
    else if(itemScore == bestScore){
      firstChoices.push(item.id);
    }

    //If all the items have the same score, then none is the highest scoring
    if(firstChoices.length === items.length){
      firstChoices.length=0;
    }
  });

  return firstChoices;
}

const mapStateToProps = ({items}) => {
  return {
    items: items,
    firstChoices : getFirstChoices(items)
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
