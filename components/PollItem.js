import React, { PropTypes } from 'react'

const PollItem = ({ text, onUpvote, onDownvote, upvotes, downvotes, isFirst }) => (
  <li className={isFirst ? 'winning pollItem' : 'pollItem'}>
    <div>{text}</div>
    <div className="pollItemVoteContainer">
      <div className="pollItemVote green" onClick={onUpvote} >
        <svg className="svgVote green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g>
            <path d="M30 20 L16 8 2 20" />
          </g>
        </svg>
      </div>
      <span className="pollItemScore">{upvotes+downvotes}</span>
      <div className="pollItemVote red" onClick={onDownvote} >
        <svg className="svgVote red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <g>
            <path d="M30 12 L16 24 2 12" />
          </g>
        </svg>
      </div>
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
