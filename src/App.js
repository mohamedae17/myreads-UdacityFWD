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
  const [query, setQuery] = useState("");
  const [mapOfIdToBooks, setMapOfIdToBooks] = useState(new Map());
  const [searchBooks] = useQuery(query);
  const [mergedBooks, setMergedBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(data => {
        setBooks(data)
        setMapOfIdToBooks(createMapOfBooks(data));
      }
      );
  }, [])

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map(book => map.set(book.id, book));
    return map;
  }

  useEffect(() => {
    const combined = searchBooks.map(b => {
      if (mapOfIdToBooks.has(b.id)) {
        return mapOfIdToBooks.get(b.id);
      } else {
        return b;
      }
    })
    setMergedBooks(combined);
  }, [searchBooks])

  const AM7 = (book, whereTo) =>{
    const updatedBooks = books.map(b => {
      if (b.id === book.book.id) {
        book.book.shelf = whereTo.whereTo;
        return book.book;
      }
      return b;
    })
      console.log(book.book)
      console.log(books);
       if (!books.some(e => e.id === book.book.id)){
         console.log("TRUE");
         book.book.shelf = whereTo.whereTo;
         updatedBooks.push(book.book);
       }
    setBooks(updatedBooks);
    BooksAPI.update(book.book, whereTo.whereTo);
  }

  return (
    <div className="App">
          <Routes>
           <Route exact path={"/"} element={<Main books={books} AM8={AM7} />}/>
          <Route  path={"/search"} element={<Search books={mergedBooks} AM8={AM7} setQuery={setQuery} query={query}/>}/>
           <Route  path={"*"} element={<NotFound/>}/>
          </Routes>  
    </div>
  )
}

export default App