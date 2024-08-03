import { useState } from "react";
import data from "./data";
import List from "./components/List";

import darkmode from "./assets/dark-mode.svg";

const App = () => {
  const [people, setPeople] = useState(data);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const clearList = () => {
    setPeople([]);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
      <img className="dark-mode-icon" src={darkmode} onClick={toggleTheme} />
      <section className={!isDarkMode ? "container" : "container dark"}>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button className="btn btn-block" onClick={clearList}>
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
