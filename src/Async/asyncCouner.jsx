import React from 'react'
import {connect} from "react-redux";


class CounterAsync extends React.Component {


    render() {
        return (
            <div>
                <div>{this.props.asyncValue}</div>
                <button onClick={this.props.addSomeAsync}>go async</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    asyncValue: state.asyncReducer.asyncValue
})
const mapDispatchToProps = dispatch => ({
    addSomeAsync: () => dispatch(addAsync())
})

const addAsync = () => {
  return (dispatch) => {
      setTimeout(() => {
          dispatch({type: 'ADD_ASYNC'})
      }, 2000)
  }
}
// type: 'ADD_ASYNC'
export default connect(mapStateToProps, mapDispatchToProps)(CounterAsync)