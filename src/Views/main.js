import Shelves from "../components/shelves";
import {Link} from "react-router-dom"
import { getAll } from "../BooksAPI";
import React from 'react';

const main =  ({books}) => {
// async componentDidMount(){
//   try{
//     const books = await getAll();
//     console.log(books);
//   }catch(error){
//     console.log(error);
//   }
// }
const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const whatToRead = books.filter((book) => book.shelf === "wantToRead");
    const read = books.filter((book) => book.shelf === "read");
        return( 
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelves title="Currently Reading" books={currentlyReading} />
            <Shelves title="Want to Read" books={whatToRead}/>
            <Shelves title="Read"  books={read} />

          </div>
          <div className="open-search">
          <Link to="/search">Add a book</Link>
            {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
          </div>
        </div>
        )
    
}

export default main;