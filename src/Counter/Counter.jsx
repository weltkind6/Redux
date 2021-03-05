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
                    addFif={() => this.props.addFif(15)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.reducer.counter
})
const mapDispatchToProps = dispatch => ({
    addCount: () => dispatch({type: 'ADD-COUNT'}),
    subCount: () => dispatch({type: 'SUB-COUNT'}),
    addFif: number => dispatch({type: 'ADD-FIF', payload: number})
})


const PureCounter = props => {
    return (
        <div>
            <h2>Counter: {props.counter}</h2>
            <button onClick={props.addCount}>Add +</button>
            <button onClick={props.subCount}>Add -</button>
        <hr/>
            <button onClick={props.addFif}>Add 15</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)