import { useState } from "react";
import List from "./components/Books/List";
import Books from "./Contexts/Books";



const App = () => {
    const [books, setBooks] = useState({showBooks:[], masterBooks: [] });

  return (
    <Books.Provider value={books}>
      <div className="App col top">
        <div className="books">
          <h1>Knygynas</h1>
          <List />
        </div>
      </div>
    </Books.Provider>
  );
};
export default App;
