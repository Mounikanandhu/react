import "./App.css";

const App = () => {
  /* Data for props */
  const hobbies = ["Reading", "Coding", "Music"];

  return (
    <div className="container">

      {/* Mini Project 1: Personal Bio */}
      <div className="box">
        <h2 className="title">Personal Bio</h2>
        <p><b>Name:</b> Mounika</p>
        <p><b>Age:</b> 22</p>
        <p><b>Bio:</b> Learning React and JSX basics.</p>
      </div>

      {/* Mini Project 2: Greeting App */}
      <div className="box">
        <h2
          style={{
            backgroundColor: "lightblue",
            padding: "10px"
          }}
        >
          Hello, Mounika!
        </h2>
      </div>

      {/* Mini Project 3: Simple Counter (UI only) */}
      <div className="box">
        <h2>Simple Counter</h2>
        <h3>0</h3>
        <button>Increase</button>
      </div>

      {/* Mini Project 4: Hobbies List */}
      <div className="box">
        <h2>Hobbies</h2>
        <ul className="hobby-list">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default App;
