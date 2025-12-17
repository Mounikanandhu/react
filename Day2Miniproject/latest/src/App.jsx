import "./App.css";

const App = () => {
  /* Mini Project 2 data */
  const temperature = 28;

  /* Mini Project 3 data */
  const num1 = 10;
  const num2 = 20;

  /* Mini Project 4 data */
  const imageUrl = "latest/src/assets/react.svg"

  return (
    <div>

      {/* Mini Project 1: Simple Profile Card */}
      <div className="card">
        <h2 style={{ color: "blue" }}>Mounika</h2>
        <p>Age: 22</p>
        <p style={{ fontStyle: "italic" }}>Location: Hyderabad</p>
      </div>

      <hr />

      {/* Mini Project 2: Temperature Display */}
      <h3>
        Temperature Status:{" "}
        {temperature > 30
          ? "Hot"
          : temperature < 15
          ? "Cold"
          : "Normal"}
      </h3>

      <hr />

      {/* Mini Project 3: Simple Calculator */}
      <h3>Simple Calculator</h3>
      <p>
        Sum of {num1} and {num2} is: <b>{num1 + num2}</b>
      </p>

      <hr />

      {/* Mini Project 4: User Avatar */}
      <div className="avatar">
        <img src={imageUrl} alt="User Avatar" />
        <p>User Profile Image</p>
      </div>

    </div>
  );
};

export default App;

     