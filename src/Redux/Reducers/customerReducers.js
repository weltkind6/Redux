const initialState = {
    customer: []
}

const ADD_CLIENT = 'ADD_CLIENT'
const DELETE_CLIENT = 'DELETE_CLIENT'
const GET_ALL_USERS = 'GET_ALL_USERS'

export const customerReducer = (state = initialState, action) => {
    console.log(state.customer)
    switch (action.type) {
        case ADD_CLIENT:
            return {...state, customer: [...state.customer, action.payload]}

        case DELETE_CLIENT:
            return {...state, customer: state.customer.filter(c => c.id !== action.payload)}

        case GET_ALL_USERS:
            return {...state, customer: [...state.customer, ...action.payload]}

        default:
            return state
    }
}


export const addCustomerAc = payload => ({type: ADD_CLIENT, payload})
export const deleteCustomerAc = payload => ({type: DELETE_CLIENT, payload})
export const getAllUsersAc = payload => ({type: GET_ALL_USERS, payload})