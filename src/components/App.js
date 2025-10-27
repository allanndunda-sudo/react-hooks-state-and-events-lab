import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Counter from "./Counter";


function App() {
    const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState (false);
  const [count, setCount] = useState(0)

  // console.log(count)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  function hanldeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={hanldeClick}>Dark Mode
          {isDarkMode ? "Switch to Light Mode": "Switch to Dark Mode"}
        </button>
      </header>
      <ShoppingList items={items}/>
      <Counter count={count}/>
    </div>
  );
}

export default App;
