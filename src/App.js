import { Routes, Route } from "react-router-dom"
import "./App.css";
import Main from "./Views/main";
import NotFound from "./Views/NotFound";
import Search from "./Views/search";
import * as BooksAPI from "./BooksAPI";
import { useEffect, useState } from "react";
function App() {
  const [showSearchPage] = useState(false);
  const [books,setBooks] = useState([]);    
  const [mapOfIdToBooks, setMapOfIdToBooks] = useState(new Map());
     useEffect(() => {
        BooksAPI.getAll().then(data =>{
          setBooks(data);
        //  setMapOfIdToBooks(createMapOfBooks(data))
        });
      // getBooks();
    }, []);

  return (
    <div className="App">
      { console.log(books) }
          <Routes>
           <Route exact path={"/"} element={<Main books={books} />}/>
           <Route  path={"/search"} element={<Search/>}/>
           <Route  path={"*"} element={<NotFound/>}/>
          </Routes>  
    </div>
  )
}

export default App