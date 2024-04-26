import { combineReducers } from "redux";
import benificiaries from "./benificiaries";
import selected_benificiary from "./selected_benificiary";

export default combineReducers({
  benificiaries,
  selected_benificiary,
});
