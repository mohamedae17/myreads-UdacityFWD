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
  const [IDS, setIds] = useState(new Map());
  const [searchResult] = useQuery(query);
  const [mixedBooks, setMixedBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then(data => {
        setBooks(data)
        setIds(Mapping(data));
      }
      );
  }, [])

  const Mapping = (data) => {
    const mymap = new Map();
    data.map(d => mymap.set(d.id, d));
    return mymap;
  }

  useEffect(() => {
    const mixed = searchResult.map(b => {
      if (IDS.has(b.id)) {
        return IDS.get(b.id);
      } else {
        return b;
      }
    })
    setMixedBooks(mixed);
  }, [searchResult])

  const AM7 = (book, whereTo) =>{
    const resultBooks = books.map(b => {
      if (b.id === book.book.id) {
        book.book.shelf = whereTo.whereTo;
        return book.book;
      }
      return b;
    })
      if (!books.some(e => e.id === book.book.id)){
         book.book.shelf = whereTo.whereTo;
         resultBooks.push(book.book);
       }
    setBooks(resultBooks);
    BooksAPI.update(book.book, whereTo.whereTo);
  }

  return (
    <div className="App">
          <Routes>
           <Route exact path={"/"} element={<Main books={books} AM8={AM7} />}/>
          <Route  path={"/search"} element={<Search books={mixedBooks} AM8={AM7} setQuery={setQuery} query={query}/>}/>
           <Route  path={"*"} element={<NotFound/>}/>
          </Routes>  
    </div>
  )
}

export default App