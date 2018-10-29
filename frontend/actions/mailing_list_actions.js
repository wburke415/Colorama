import * as APIUtil from '../util/mailing_list_util';

export const RECEIVE_MAILING_LIST = 'RECEIVE_MAILING_LIST'

export const receiveMailingList = email => ({
  type: RECEIVE_MAILING_LIST,
  email
});

export const createMailingList = email => dispatch => (
  APIUtil.createMailingList(email)
    .then(email => dispatch(receiveMailingList(email)))
);