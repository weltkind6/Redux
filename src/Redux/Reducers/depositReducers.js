const initialState = {
    cash: 99
}

export const depositReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MONEY':
            return {
                ...state, cash: state.cash + action.payload
            }
        case 'GET_MONEY':
            return {
                ...state, cash: state.cash -  action.payload
            }
        default:
            return state
    }
}