import React from 'react'
import {connect} from "react-redux";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <PureCounter
                    addCount={this.props.addCount}
                    subCount={this.props.subCount}
                    counter={this.props.counter}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})
const mapDispatchToProps = dispatch => ({
    addCount: () => dispatch({type: 'ADD-COUNT'}),
    subCount: () => dispatch({type: 'SUB-COUNT'}),
})


const PureCounter = props => {
    return (
        <div>
            <h2>Counter: {props.counter}</h2>
            <button onClick={props.addCount}>Add +</button>
            <button onClick={props.subCount}>Add -</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)