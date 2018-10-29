import { connect } from 'react-redux';

import Contact from './contact';
import { createMailingList } from '../../actions/mailing_list_actions';

const mapDispatchToProps = dispatch => ({
  createMailingList: email => dispatch(createMailingList(email))
});

export default connect(mapDispatchToProps)(Contact);