import React from 'react';
import '../App.css';

class Counter extends React.Component {
    render = () => {
        let classEndValue = this.props.state.currentValue === 5 ? 'classEndValue' : '';
        return (
            <div className = "counter"> 
                <div className = {classEndValue} >{this.props.state.currentValue}</div>
            </div>
        );
    }
}

export default Counter;