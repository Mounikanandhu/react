import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";

function App() {
  
  const root = ReactDOM.createRoot(document.getElementById("root"));

  return (

    <div>
      <h1>Welcome to React</h1>
      <h1>Hello React</h1>
      <h2 style={{ color: "blue" }}>Styled Text</h2>
      <h2 className="heading">Styled Heading</h2>;
    
    </div>

  );
}

export default App

