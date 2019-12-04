import React from 'react';

class Add extends React.Component {

    fromChild = (text) => {
        this.props.changeText(text);
    }

    render() {
        return(
            <div>
                <span className="value">Value One {this.props.ValueOne}</span>
                <span className="value">Value Two {this.props.ValueTwo}</span>
                <span className="value">One Two {this.props.oneTwo}</span>
                <button onClick={this.props.addTwoValue}>Add Two Value</button>
                <button onClick={() => this.changeText('Text z dziecka')}>Change text from child</button>
            </div>
        )
    }
}

export default Add;