import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];
const applied = composeWithDevTools ( applyMiddleware(...middleware) ); //error!

const store = createStore(rootReducer, initialState, applied);


export default store;
