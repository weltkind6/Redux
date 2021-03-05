import React from 'react'
import {connect} from "react-redux";

class Counter2 extends React.Component {
    render() {
        return (
            <div>
                <hr/>
                <h2>Counter#2: {this.props.counter2}</h2>
                <button onClick={this.props.addNewCount}>Add new count</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.reducer2.counter2
})

const mapDispatchToProps = dispatch => ({
    addNewCount: () => dispatch({type: 'ADD-NEW-COUNT'})
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter2)