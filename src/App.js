import "./styles.css";
import React, { useState } from "react";

let foodEmojiDictionary = {
  "🥞": "Pancakes",
  "🧇": "Waffle",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🥪": "Sandwich",
  "🍿": "Popcorn",
  "🍺": "Beer",
  "🍨": "Ice Cream",
  "🧁": "Cup cake"
};

let emojiArray = Object.keys(foodEmojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onInputChangeHandler(event) {
    let emoji = event.target.value;
    let meaning = foodEmojiDictionary[emoji];
    if (meaning !== undefined) {
      setMeaning(meaning);
    } else {
      setMeaning("Error: This is not in our dictionary");
    }
  }

  function onEmojiClickHandler(emoji) {
    let meaning = foodEmojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food Emoji Interpreter App</h1>
      <input
        id="emojiInput"
        style={{ fontSize: "1.8rem", width: "100%", textAlign: "center" }}
        onChange={onInputChangeHandler}
      ></input>
      <div style={{ paddingTop: "1.5rem" }}>{meaning}</div>
      <ul>
        {emojiArray.map((item) => {
          return (
            <span
              onClick={() => onEmojiClickHandler(item)}
              key={item}
              style={{
                fontSize: "3rem",
                display: "inline",
                paddingRight: "1rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
