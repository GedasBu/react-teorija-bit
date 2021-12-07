import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./components/Books/Book";
import List from "./components/Books/List";
import Books from "./Contexts/Books";




const App = () => {
    const [books, setBooks] = useState({showBooks:[], masterBooks: [] });
useEffect(()=>{
    axios.get('https://in3.dev/knygos/')
    .then(res=>{
        setBooks({
            showBooks: res.data,
            masterBooks: res.data
        })
    })
},[])


  return (
    <Books.Provider value={books}>
      <div className="App col top">
        <div className="books">
          <h1>Knygynas</h1>          
          <BrowserRouter>
          <Routes>
          <Route path="/" element ={<List></List>}></Route>
          <Route path="/book/:id" element ={<Book/>}></Route>
          
          </Routes>
         </BrowserRouter>
        </div>
      </div>
    </Books.Provider>
  );
};
export default App;
