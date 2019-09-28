import React from 'react';
import '../App.css';


class Footer extends React.Component {
    render = () => {
        let classEndValue = this.props.state.currentValue === this.props.state.maxValue ? 'classEndValue' : '';
        return (
            <div className = "buttons">
                <button className = {classEndValue + " wrapperButton"} onClick={() => {this.props.incCurrentValue(this.props.state.currentValue) }}>inc</button>
                <button className = "wrapperButton" onClick={() => {this.props.nullifyValue() }}>reset</button>
            </div>
        );
    }
}

export default Footer;