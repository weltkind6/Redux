import {getAllUsersAc} from "../Redux/Reducers/customerReducers";

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => dispatch(getAllUsersAc(response)))
            .then(response => console.log(...response.payload))

    }
}
