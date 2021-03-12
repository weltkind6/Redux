const initialState = {
    cashBack: 1
}

export const testCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cashBack: state.cashBack + action.payload}
        case GET_CASH:
            return {...state, cashBack: state.cashBack - 1}
        default:
            return state
    }

}


// в отдельный файл
export const ADD_CASH = 'ADD-CASH'
export const GET_CASH = 'GET-CASH'

// в отдельный файл
export const addCashAc = payload => ({type: ADD_CASH, payload})