const initialState = {
    counter2: 88
}
export const reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-NEW-COUNT': {
            return {
                counter2: state.counter2 + 3
            }
        }
        default:
            return state
    }
}

