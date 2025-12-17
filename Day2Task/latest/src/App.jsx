import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";



function App() {
  const name = "Mounika";
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const isLoggedIn = true;
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>{5 + 5}</h2>
      <h2>{name}</h2>
      <p className="text">This is JSX</p>
      <h1 style={{ color: "blue", fontSize: "24px" }}>
        Inline Styling
      </h1>
      <h2 className="heading">Styled Text</h2>
      <h1>Hello React</h1>
      <div>
        {/* This is a JSX comment */}
        <h2>Hello</h2>
      </div>
      <h2>Welcome to React</h2>;
      <h1>Title</h1>
      <p>Description</p>
      <div>
        {isLoggedIn && <h2>Welcome User</h2>}
      </div>
    </div>

    



  );
}

export default App
