import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as headerrType } from "./headerManage/Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    headerrType,


});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


