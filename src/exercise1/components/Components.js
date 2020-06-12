import React from 'react';
import '../styles/style.css';

/* Two simple react components.
    Upper is a screen showing the header
    Latter contains the buttons and a changing number 
*/

class CounterScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            color: 'rgba(0,0,0,1)'
        }
    }

    // buttonClicked takes a boolean as a parameter depending on which button was pressed, + or -
    buttonClicked(btnBoolean) {
        let i = 0
        switch (btnBoolean) {
            case (true):    // if the pressed button was "+"
                i = this.state.counter + 1
                this.setState({ counter: i })
                if (i < 0) {
                    this.setState({ color: 'rgba(255,0,0,1)' })
                } else {
                    this.setState({ color: 'rgba(0,0,0,1)' })
                } break;

            case (false):   // if the pressed button was "-"
                i = this.state.counter - 1
                this.setState({ counter: i })
                if (i < 0) {
                    this.setState({ color: 'rgba(255,0,0,1)' })
                } else {
                    this.setState({ color: 'rgba(0,0,0,1)' })
                } break;

            default:    // if there was something else than a boolean as function param
                console.log('Error in switch-case')
                break;
        }
    }

    render() {
        return (
            <div className='counterBox'>
                <button className='counterButton' onClick={() => this.buttonClicked(false)}> - </button>
                <h2 className='counterNumber' style={{ color: this.state.color }} >{this.state.counter}</h2>
                <button className='counterButton' onClick={() => this.buttonClicked(true)}> + </button>
            </div>
        )
    }
}

class HeaderBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: 'Counter',
            paragraph: 'Change the number by clicking buttons'
        }
    }

    render() {
        return (
            <div className='headerBox'>
                <h1 className='header'>{this.state.header}</h1>
                <p className='explainer'>{this.state.paragraph}</p>
            </div>
        )
    }
}


export { CounterScreen, HeaderBox }
