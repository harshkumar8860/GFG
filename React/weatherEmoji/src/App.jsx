import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { emojiDictionary } from "./feature/weather/weatherSlice";
import Header from "./header";
import 
function App() {
  const dispatch = useDispatch();
  const sendData = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <>
      <div>
        <header />
        <h3>Type your Emoji here 👇 to know its meaning</h3>
        <inputForm/>
        <h4>click on emoji to know its meaning</h4>
        <h4>🌧, 🌪, ☔, ☕, 🌊, 😊 🐛, 🤧</h4>
      </div>
    </>
  );
}

export default App;
