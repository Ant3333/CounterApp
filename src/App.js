import React from 'react';
import './App.css';
import Counter from "./components/Counter.jsx";
import Footer from "./components/Footer.jsx";


class App extends React.Component {

  state = {
    startValue: 0,
    currentValue: 0,
    maxValue: 5
  };

  incCurrentValue = () => {
    if (this.state.currentValue < this.state.maxValue) {
      this.setState({
        currentValue: this.state.currentValue + 1
      });
    };
  };

  nullifyValue = () => {
    this.setState({
      currentValue: this.state.startValue
    });
  };
  render = () => {
    return (
      <div className="App">
        <div className = "appWrapper">
          <Counter state = {this.state} />
          <Footer state = {this.state} incCurrentValue = {this.incCurrentValue} nullifyValue = {this.nullifyValue}/>
        </div>
      </div>
    );
  }
}

export default App;
