import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkModeButton, setIsDarkModeButton]=useState(false);
  const [changeDarkMode, setChangeDarkMode]=useState(false);
   

    const appClass = changeDarkMode ? "App dark" : "App light"
    
    function handleDarkMode(){
      setIsDarkModeButton(!isDarkModeButton)
      setChangeDarkMode(!changeDarkMode)
    }
    
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkModeButton?"Light Mode":"Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;