import React from 'react';
import '../styles/style.css';

// Simple react component with a button that increments a number

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    plusButtonClicked() {
        let i = this.state.counter + 1
        this.setState({ counter: i })
    }

    minusButtonClicked() {
        let i = this.state.counter - 1

        this.setState({ counter: i })
    }

    render() {
        return (
            <div class='counterBox'>
                <h1 class='counterHeader'>Counter</h1>
                <div class='buttonContainer'>
                    <button class='minusButton' onClick={() => this.minusButtonClicked()}>-</button>
                    <h2 class='counterNumber'>{this.state.counter}</h2>
                    <button class='plusButton' onClick={() => this.plusButtonClicked()}>+</button>
                </div>
            </div>
        )
    }
}

export { Counter }
