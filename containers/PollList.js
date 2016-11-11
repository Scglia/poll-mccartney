import React from 'react';
import { connect } from 'react-redux';
import { upvoteItem, downvoteItem } from '../actions';
import PollItem from '../components/PollItem';
import { getFirstChoices } from '../reducers';

/**
 * returns the highest scoring items
 * @param {Array} items
 * @return {Array} item.id
 */

const mapStateToProps = state => ({
  items: state.items,
  firstChoices: getFirstChoices(state),
});

let PollList = ({ items, firstChoices, onUpvote, onDownvote }) => (
  <ul className="pollList">
    {items.map(item =>
      <PollItem
        key={item.id}
        onUpvote={() => onUpvote(item.id)}
        onDownvote={() => onDownvote(item.id)}
        isFirst={firstChoices.includes(item.id)}
        {...item}
      />,
    )}
  </ul>
);

PollList = connect(
  mapStateToProps,
  {
    onUpvote: upvoteItem,
    onDownvote: downvoteItem,
  },
)(PollList);

export default PollList;
