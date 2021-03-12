const initialState = {
    counter: 0
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-COUNT': {
            return {
                counter: state.counter + 1
            }
        }
        case 'SUB-COUNT': {
            return {
                counter: state.counter - 1
            }
        }
        case 'ADD-FIF': {
            return {
                counter: state.counter + action.payload
            }
        }
        default:
            return state
    }
}