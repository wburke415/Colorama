import * as APIUtil from '../util/mailing_list_util';

export const RECEIVE_MAILING_LIST = 'RECEIVE_MAILING_LIST';
export const RECEIVE_MAILING_LIST_ERRORS = 'RECEIVE_MAILING_LIST_ERRORS';

export const receiveMailingList = email => ({
  type: RECEIVE_MAILING_LIST,
  email
});

export const receiveMailingListErrors = errors => ({
  type: RECEIVE_MAILING_LIST_ERRORS,
  errors
});

export const createMailingList = email => dispatch => (
  APIUtil.createMailingList(email)
    .then(email => dispatch(receiveMailingList(email)))
    .fail(errors => dispatch(receiveMailingListErrors(errors)))
);