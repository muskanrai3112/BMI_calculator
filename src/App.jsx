import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  console.log(weight, "fdhjfhd");
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");
  const [error, setError] = useState(false);

  // Logic
  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      setError(true);
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You have healthy weight");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="container">
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input
              type="text"
              name="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          {error ? (
            <span htmlFor="error message" style={{ color: "red" }}>
              Provide proper value for weight input
            </span>
          ) : (
            ""
          )}
          <div>
            <label>Height (in)</label>
            <input
              type="text"
              name="Enter weight height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          {error ? (
            <span htmlFor="error message" style={{ color: "red" }}>
              Provide proper value for height input
            </span>
          ) : (
            ""
          )}
          <div>
            <button className="btn">Submit</button>
            <button className="btn-btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
