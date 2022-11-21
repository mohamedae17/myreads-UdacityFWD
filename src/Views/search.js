import { Link } from "react-router-dom";

import React from 'react'
import Book from "../components/Book";

const Search = props => {

        return(
        <div className="search-books">
          <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={props.query} onChange={(e) => props.setQuery(e.target.value)}  />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {props.books.map(b => (
                    <li key={b.id}>
                      <Book books={b} onChangeShelf={props.AM8} />
                    </li>
                  ))}
            </ol>
          </div>
        </div>)
}

export default Search;