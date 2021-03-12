const initialState = {
    asyncValue: 0
}
export const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ASYNC':
            return {...state, asyncValue: state.asyncValue + 100}
        default:
            return state
    }
}