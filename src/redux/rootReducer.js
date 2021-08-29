import { combineReducers } from "redux";

import shopReducer from "./Shoping/shopingReducer";
const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
