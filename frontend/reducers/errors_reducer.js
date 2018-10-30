import { combineReducers } from "redux";

import mailingListErrorsReducer from "./mailing_list_reducer";

const errorsReducer = combineReducers({
  mailingListErrors: mailingListErrorsReducer
});

export default errorsReducer;
