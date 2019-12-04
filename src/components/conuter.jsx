import React from 'react';
import './counter.css';
import ButtonsPanel from './buttonsPanels';
import './add';

class Counter extends React.Component {

    constructor(props) {
        super(props);

        let initValue = 0;
        if (! isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }
        this.state = {
            counterValue: initValue
        }
    }

    resetCounter = (resetCounter) => {
        let initValue = 0

        if(!resetCounter) {
            if ( !isNaN(this.props.initValue)) {
                initValue = parseInt(this.props.initValue);
            }
        }
        this.setState({
            counterValue: initValue,
            ValueOne: 5,
            ValueTwo: 10,
        })
    }

    changeValue = () => {
        this.setState({
            counterValue: this.state.counterValue + 1,
        })
    }
    
    changeText = (text) => {
        this.setState({
            fromChild: text,
        });
    }
    render() {
        return(
            <div className="counter">
                Licznik:
                <span className="value">{this.state.counterValue}</span>
                <ButtonsPanel changeValue={this.changeValue} resetCounterValue={this.resetCounter}/>
                <add ValueOne={this.state.ValueOne}
                ValueTwo={this.state.ValueTwo}
                oneTwo={this.state.oneTwo}
                addTwoValue={this.addTwoValue}
                changeText={this.changeText}/>
                <span>Text from child : {this.state.fromChild}</span>
            </div>
        )
    }
};

export default Counter;