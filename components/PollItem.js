import React, { PropTypes } from 'react'

const PollItem = ({ text, onUpvote, onDownvote, upvotes, downvotes }) => (
  <li>
    {text} <span onClick={onUpvote} >👍 {upvotes}</span> <span onClick={onDownvote} >👎 {downvotes}</span>
  </li>
)

PollItem.propTypes = {
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default PollItem
