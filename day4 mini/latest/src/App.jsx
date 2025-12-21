import "./App.css";

/* Mini Project 1: Profile Card */
function Profile({ name = "Guest", age = 0, city = "Unknown" }) {
  return (
    <div className="card">
      <h2>Profile Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

/* Mini Project 2: Task List */
function TaskList({ tasks }) {
  return (
    <div className="card">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

/* Mini Project 3: Colorful Text */
function ColorfulText({ text, color }) {
  return (
    <div className="card">
      <h2>Colorful Text</h2>
      <p style={{ color }}>{text}</p>
    </div>
  );
}

/* Mini Project 4: Click Counter */
function ClickCounter({ onClick }) {
  return (
    <div className="card">
      <h2>Click Counter</h2>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

/* Main App */
function App() {
  const tasks = ["Learn React", "Practice Props", "Build Mini Projects"];

  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="container">
      <Profile name="Mounika" age={22} city="Hyderabad" />
      <TaskList tasks={tasks} />
      <ColorfulText text="React is Awesome!" color="green" />
      <ClickCounter onClick={handleClick} />
    </div>
  );
}

export default App;
