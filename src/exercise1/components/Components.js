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

class CarList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: 'Counter',
            paragraph: 'Change the number by clicking buttons'
        }
    }


    createList = (source) => {
        for (let i = 0; i < source; i++) {

        }
    }

    render() {

        const carList = [
            { manufacturer: 'Citroën', model: 'C5 Aircross', color: 'white' },
            { manufacturer: 'Toyota', model: 'Avensis', color: 'green' },
            { manufacturer: 'Tesla', model: 'Cybertruck', color: 'grey' },
            { manufacturer: 'Lexus', model: 'LFA', color: 'yellow' },
            { manufacturer: 'Lamborghini', model: 'Aventador', color: 'orange' }
        ]

        return (
            <div>
                <table id='carList'>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Color</th>
                    </tr>
                    <tr>
                        <th>{carList[0].manufacturer}</th>
                        <th>{carList[0].model}</th>
                        <th>{carList[0].color}</th>
                    </tr>
                    <tr>
                        <th>{carList[1].manufacturer}</th>
                        <th>{carList[1].model}</th>
                        <th>{carList[1].color}</th>
                    </tr>
                    <tr>
                        <th>{carList[2].manufacturer}</th>
                        <th>{carList[2].model}</th>
                        <th>{carList[2].color}</th>
                    </tr>
                    <tr>
                        <th>{carList[3].manufacturer}</th>
                        <th>{carList[3].model}</th>
                        <th>{carList[3].color}</th>
                    </tr>
                    <tr>
                        <th>{carList[4].manufacturer}</th>
                        <th>{carList[4].model}</th>
                        <th>{carList[4].color}</th>
                    </tr>
                </table>
            </div>
        )
    }
}


export { CounterScreen, HeaderBox, CarList }
