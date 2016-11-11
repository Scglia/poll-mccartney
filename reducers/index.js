import { combineReducers } from 'redux';
import items, * as fromItems from './items';

const pollApp = combineReducers({
  items,
});

export default pollApp;

export const getFirstChoices = state => fromItems.getFirstChoices(state.items);
