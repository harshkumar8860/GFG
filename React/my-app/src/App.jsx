import { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";

function App({ name, branch, number }) {
  console.log("render");
  // let data = number;
  // let change = data - 2;
  const [text, setText] = useState("Hello!");
  const [count, setCount] = useState(5);
  return (
    <>
      {/* <h1>{name}</h1>
      <h1>{branch}</h1> */}
      {/* <h1>{change}</h1> */}
      <h1>Hello!</h1>
      <h1>{text}</h1>
      <button
        onClick={() => {
          if (text === "Hello!") {
            setText("Bye!");
          } else {
            setText("Hello!");
          }
        }}
      >
        Update Hello
      </button>
      <Welcome text={text} />
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Inc</button>
      <button onClick={() => setCount(count-1)}>Dec</button>
    </>
  );
}

export default App;
