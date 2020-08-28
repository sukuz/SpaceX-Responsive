import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import payloadReducer from "./payloadReducer";

const rootReducer = combineReducers({
  payloadSpacex: payloadReducer,
  filterReducer,
});

export default rootReducer;
