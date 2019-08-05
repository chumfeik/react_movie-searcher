import { combineReducers } from 'redux';
import genres from './genres';
import page from './page';
import query from './query';
import contentInfo from './contentInfo';
import details from './details';

export default combineReducers({ genres, page, query, contentInfo, details });
