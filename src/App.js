import { Routes, Route } from "react-router-dom"
import "./App.css";
import Main from "./Views/main";
import NotFound from "./Views/NotFound";
import Search from "./Views/search";
import * as BooksAPI from "./BooksAPI";
import { useEffect, useState } from "react";
import useQuery from "./Hooks/useQuery";
function App() {
  const [books,setBooks] = useState([]);    

  useEffect(() => {
    BooksAPI.getAll()
      .then(data => {
        setBooks(data)
      }
      );
  }, [])

  const AM7 = (book, whereTo) =>{
    // console.log(book.book);
    const updatedBooks = books.map(b => {
      if (b.id === book.book.id) {
        book.book.shelf = whereTo.whereTo;
        return book.book;
      }
      return b;
    })
    console.log(updatedBooks);
    setBooks(updatedBooks);
    BooksAPI.update(book.book, whereTo.whereTo);
  }

  return (
    <div className="App">
          <Routes>
           <Route exact path={"/"} element={<Main books={books} AM8={AM7} />}/>
           {/* <Route  path={"/search"} element={<Search books={books} query={query}/>}/> */}
           <Route  path={"*"} element={<NotFound/>}/>
          </Routes>  
    </div>
  )
}

export default App