import { combineReducers } from 'redux';
import searchResult from './searchResult';
import genres from './genres';
import page from './page';
import query from './query';
import contentInfo from './contentInfo';
import details from './details';

export default combineReducers({
  searchResult,
  genres,
  page,
  query,
  contentInfo,
  details
});
