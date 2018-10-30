import merge from 'lodash/merge';

import { RECEIVE_MAILING_LIST_ERRORS } from '../actions/mailing_list_actions';

const mailingListReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_MAILING_LIST_ERRORS:
      return action.errors;

    default:
      return state;
  }
}

export default mailingListReducer;