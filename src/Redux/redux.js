import {createStore} from "redux";

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
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
    }
    return state
}

const store = createStore(reducer)

const addCount = ({
    type: 'ADD-COUNT'
})
const subCount = ({
    type: 'SUB-COUNT'
})
store.dispatch(addCount, subCount)

export default store