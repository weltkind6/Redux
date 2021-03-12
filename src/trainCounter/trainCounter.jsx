import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addCashAc, GET_CASH} from "../Redux/Reducers/testCounter";

const TestCounter = () => {

    const cashBack = useSelector(state => state.testCounterReducer.cashBack)
    const dispatch = useDispatch()

    const addCash = number => {
        dispatch(addCashAc(number))
    }
    const getCash = () => {
        dispatch({type: GET_CASH})
    }

    return (
        <div>
            <h3>CashCounter: {cashBack} $</h3>
            <button style={{border: 'none'}} onClick={() => addCash(Number(prompt()))}>Increase</button>
            <button style={{border: 'none'}} onClick={getCash}>Lower</button>
        </div>
    )
}

export default TestCounter