import React from 'react'
import {useDispatch, useSelector} from "react-redux";

const Deposit = () => {
    const getCash =  useSelector(state => state.depositReducer.cash)
    const dispatch = useDispatch()

    const addMoney = number => {
        dispatch({type: 'ADD_MONEY', payload: number})
    }
    const getMoney = number => {
        dispatch({type: 'GET_MONEY', payload: number})
    }


    return (
        <div>
            <h2>Your money: {getCash}</h2>
            <button style={{border: 'none'}} onClick={() => addMoney(Number(prompt()))}>Add money</button>
            <button style={{border: 'none'}} onClick={() => getMoney(Number(prompt()))}>Get money</button>
        </div>
    )
}


export default Deposit