import { combineReducers } from 'redux';

import mailingListReducer from './mailing_list_reducer';

const entitiesReducer = combineReducers({
  mailingList: mailingListReducer
});

export default entitiesReducer;