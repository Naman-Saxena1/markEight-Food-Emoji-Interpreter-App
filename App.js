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
  "🍨": "Ice Cream"
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
    this.emojiInput.value = "";
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food Emoji Interpreter App</h1>
      <input id="emojiInput" onChange={onInputChangeHandler}></input>
      <div style={{ paddingTop: "1.5rem" }}>{meaning}</div>
      <ul>
        {emojiArray.map((item) => {
          return (
            <li
              onClick={() => onEmojiClickHandler(item)}
              key={item}
              style={{
                display: "inline",
                paddingRight: "1rem",
                cursor: "pointer"
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
