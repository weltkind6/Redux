import React from 'react'
import './App.css';
import Counter from "./Counter/Counter";
import Counter2 from "./Counter/Counter2";
import Deposit from "./Deposit/Deposit";
import TestCounter from "./trainCounter/trainCounter";
import CounterAsync from "./Async/asyncCouner";

function App() {
    return (
        <div>
            <Counter/>
            <Counter2/>
            <Deposit/>
            <TestCounter />
            <CounterAsync />
        </div>
    );
}

export default App;
