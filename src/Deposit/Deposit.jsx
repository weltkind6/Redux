import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAc, deleteCustomerAc} from "../Redux/Reducers/customerReducers";
import {fetchCustomers} from "../Async/async";

const Deposit = () => {
    const getCash = useSelector(state => state.depositReducer.cash)
    const customerReducer = useSelector(state => state.customerReducer.customer)
    const dispatch = useDispatch()

    const addMoney = number => {
        dispatch({type: 'ADD_MONEY', payload: number})
    }
    const getMoney = number => {
        dispatch({type: 'GET_MONEY', payload: number})
    }
    const addNewClient = name => {
        const newCustomer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAc(newCustomer))
    }
    const deleteClient = client => {
        dispatch(deleteCustomerAc(client.id))
    }


    return (
        <div>
            <div>
                <h2>Your money: {getCash}</h2>
                <button style={{border: 'none'}} onClick={() => addMoney(Number(prompt()))}>Add money</button>
                <button style={{border: 'none'}} onClick={() => getMoney(Number(prompt()))}>Get money</button>
                <button onClick={() => dispatch(fetchCustomers())}>get all</button>
            </div>
            <div>
                <button onClick={() => addNewClient(prompt())}>add new client</button>

                {customerReducer.length > 0 ?
                    <div>{customerReducer.map(client =>
                        <div key={client.id} onClick={() => deleteClient(client)}>
                            {client.name}</div>)}</div>
                    : <div style={{fontSize: '2em'}}>Nobody here</div>
                }
            </div>
            <hr/>
        </div>
    )
}


export default Deposit