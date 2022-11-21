import Shelves from "../components/shelves";
import {Link} from "react-router-dom"
import React from 'react';

const main = props => {
    const currentlyReading = props.books.filter((book) => book.shelf === "currentlyReading");
    const whatToRead = props.books.filter((book) => book.shelf === "wantToRead");
    const read = props.books.filter((book) => book.shelf === "read");

    return( 
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelves title="Currently Reading" books={currentlyReading} AM9={props.AM8}/>
          <Shelves title="Want to Read" books={whatToRead} AM9={props.AM8}/>
          <Shelves title="Read"  books={read} AM9={props.AM8}/>
        </div>
        <div className="open-search">
        <Link to="/search">Add a book</Link>
        </div>
      </div>
      )
}

export default main;