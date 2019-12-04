import React from 'react';
import './buttons.css';

class ButtonsPanel extends React.Component {

    resetOrReinitCounter = (reset => {
        this.props.resetCounterValue(reset);
    })

    render() {
        return(
            <div className="buttons-panel">
                <button onClick={this.props.changeValue}>Add 1</button>
                <button onClick={() => this.resetOrReinitCounter(false)}>Reinit</button>
                <button onClick={() => this.resetOrReinitCounter(true)}>Reset</button>
            </div>
        )
    }
}

export default ButtonsPanel