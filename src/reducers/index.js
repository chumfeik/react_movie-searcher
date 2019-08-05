import { combineReducers } from 'redux';
import page from './page';
import query from './query';
import contentInfo from './contentInfo';
import details from './details';

export default combineReducers({ page, query, contentInfo, details });
