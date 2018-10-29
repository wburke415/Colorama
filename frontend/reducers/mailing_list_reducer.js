import merge from 'lodash/merge';

import RECIEVE_MAILING_LIST, { RECEIVE_MAILING_LIST } from '../actions/mailing_list_actions';

const mailingListReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch(action.type) {

    case RECEIVE_MAILING_LIST:
      return merge({}, state, action.email);
    
    default:
      return state;
  }
}

export default mailingListReducer;