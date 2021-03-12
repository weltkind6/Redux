import {combineReducers} from "redux";
import {reducer} from "./reducer";
import {reducer2} from "./reducer2";
import {depositReducer} from "./depositReducers";
import {customerReducer} from "./customerReducers";
import {testCounterReducer} from "./testCounter";
import {asyncReducer} from "./asyncReducer";

const rootReducer = combineReducers({
    reducer, reducer2, depositReducer, customerReducer, testCounterReducer, asyncReducer
})

export default rootReducer