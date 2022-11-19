import { Link } from "react-router-dom";

import React from 'react'

const Search = () => {

        return(
        <div className="search-books">
          <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
            {/* <a
              className="close-search"
              // eslint-disable-next-line no-undef
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a> */}
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>)
}

export default Search;