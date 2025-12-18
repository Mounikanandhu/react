import React from "react";
import "./APP.css";

function App() {
  /* Props data */
  const message = "This is a simple prop message";
  const name = "Mounika";
  const age = 22;
  const city = "Hyderabad";
  const isStudent = true;
  const hobbies = ["Reading", "Coding", "Music"];
  const user = {
    name: "John",
    email: "john@gmail.com",
    phone: "9876543210"
  };

  const showAlert = () => {
    alert("Button clicked using props!");
  };

  return (
    <div className="app">
      {/* 2. Simple Text Prop */}
      <p>{message}</p>

      {/* 3. Multiple Props */}
      <p>
        Name: {name}, Age: {age}
      </p>

      {/* 4. Destructuring Props (simulated) */}
      <p>
        Name: {name}, City: {city}
      </p>

      {/* 5. Boolean Prop */}
      <p>{isStudent ? "Student" : "Not a Student"}</p>

      {/* 6. Default Props */}
      <p>Welcome, {name || "Guest"}</p>

      {/* 7. List Rendering with Props */}
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      {/* 8. Object Props */}
      <h3>User Details:</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      {/* 9. Conditional Rendering with Props */}
      <h3>Welcome, {name ? name : "Guest"}</h3>

      {/* 10. Inline Styling with Props */}
      <p style={{ color: "blue" }}>This text color is from props</p>

      {/* 11. Button Click Event with Props */}
      <button onClick={showAlert}>Click Me</button>

      {/* 12. Reusable Card Component */}
      <div className="card">
        <h3>React Card</h3>
        <p>Props make components reusable</p>
      </div>

      {/* 13. Child Component Communication */}
      <div className="box">
        <p>Child 1 Text: Hello from Parent</p>
        <p>Child 2 Text: Hello from Parent</p>
      </div>
    </div>
  );
}

export default App;
