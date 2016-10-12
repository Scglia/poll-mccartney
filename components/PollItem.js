import React, { PropTypes } from 'react'

const PollItem = ({ text, onUpvote, onDownvote, upvotes, downvotes, isFirst }) => (
  <li className="pollItem">
    <div>{isFirst ? '⭐️ ' : ''} {text}</div>
    <div className="pollItemVoteContainer">
      <span className="pollItemVote green" onClick={onUpvote} ></span>
      <span className="pollItemScore">{upvotes+downvotes}</span>
      <span className="pollItemVote red" onClick={onDownvote} ></span>
    </div>
  </li>
)

PollItem.propTypes = {
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired
}

export default PollItem
