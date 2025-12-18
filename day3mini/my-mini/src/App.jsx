import React, { Component } from "react";
import "./App.css";

/* Mini Project 2 & 4: Class Component */
class CounterAndTimer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="box">
        <h3>Click Counter</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>

        <h3>Timer</h3>
        <p>Current Time: {this.state.time}</p>
      </div>
    );
  }
}

/* Main App Component */
function App() {
  const showText = true;

  return (
    <div className="app">
      {/* Mini Project 1: Welcome Message */}
      <h2 style={{ color: "blue", textAlign: "center" }}>
        Welcome to React Learning!
      </h2>

      {/* Mini Project 3: Show/Hide Text */}
      {showText && <p className="hello-text">Hello, World!</p>}

      {/* Mini Project 2 & 4 */}
      <CounterAndTimer />
    </div>
  );
}

export default App;
