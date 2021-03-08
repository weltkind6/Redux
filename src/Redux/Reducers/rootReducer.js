import {combineReducers} from "redux";
import {reducer} from "./reducer";
import {reducer2} from "./reducer2";
import {depositReducer} from "./depositReducers";

const rootReducer = combineReducers({
    reducer, reducer2, depositReducer
})

export default rootReducer