import React, { Component } from "react";
import "./APP.css";

/* Class Component: Counter + Lifecycle */
class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Counter component mounted");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter-box">
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

/* Main App Component */
function App() {
  const showReactText = true;

  return (
    <div>
      {/* 1. Functional Component Text */}
      <h2>Welcome to React!</h2>

      {/* 2. Static Functional Text */}
      <p>Learning React is fun!</p>

      {/* 3. Multiple Functional Messages */}
      <p>First Functional Message</p>
      <p>Second Functional Message</p>
      <p>Third Functional Message</p>

      {/* 4 & 5. Class Component Static Text */}
      <h3>This is a Class Component</h3>
      <p>Hello from Class Component!</p>

      {/* 6. Multiple Class Messages */}
      <p>Class Component Message One</p>
      <p>Class Component Message Two</p>

      {/* 7, 8 & 13. State, Button & Lifecycle */}
      <Counter />

      {/* 9. Inline Styling */}
      <h3 style={{ color: "blue" }}>Inline Styled Text</h3>

      {/* 10. External CSS Styling */}
      <h3 className="styled-text">Styled using External CSS</h3>

      {/* 11. Conditional Rendering */}
      {showReactText && <h3>React is Cool!</h3>}

      {/* 12. Nested JSX */}
      <div>
        <h3>Parent Component</h3>
        <p>Child Component</p>
      </div>
    </div>
  );
}

export default App;
