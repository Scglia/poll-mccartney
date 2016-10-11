import React from 'react'
import { connect } from 'react-redux'
import { upvoteItem, downvoteItem } from '../actions'
import PollItem from '../components/PollItem'

const mapStateToProps = (state) => {
  return {
    items: state.items
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

let PollListContainer = ({ dispatch, items, onUpvote, onDownvote }) => {
  return (
    <ul>
      {items.map(item =>
        <PollItem
          key={item.id}
          onUpvote={() => onUpvote(item.id)}
          onDownvote={() => onDownvote(item.id)}
          {...item}
        />
      )}
    </ul>
)}

PollListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PollListContainer)

export default PollListContainer
