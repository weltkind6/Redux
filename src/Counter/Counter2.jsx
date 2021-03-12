import React from 'react'
import {connect} from "react-redux";

class Counter2 extends React.Component {

    state = {
        name: '',
        id: ''
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(response => this.setState({
    //             data: response.map(n => <div>{n.name}</div>)
    //         }))
    //         .catch(err => console.log('No results!'))
    // }

    onAdd = (newUser) => {
        this.setState({
            newUsers: this.state.data.push(newUser)
        })
    }

    getUserInfo = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => this.setState({
                name: response.map(name => <div key={name.id}>{name.name}</div>)
            }))
            .catch(err => console.log('No results!'))
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.name}
                </div>
                <hr/>
                <h2>Counter#2: {this.props.counter2}</h2>
                <button onClick={this.props.addNewCount}>Add new count</button>
                <button onClick={() => this.onAdd(prompt())}>Get users</button>
                <button onClick={this.getUserInfo}>Get users massive </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter2: state.reducer2.counter2
})

const mapDispatchToProps = dispatch => ({
    addNewCount: () => dispatch({type: 'ADD-NEW-COUNT'})
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter2)