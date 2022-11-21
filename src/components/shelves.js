import Book from "./Book";

import React from 'react';


const Shelves= props =>{
    return( 
          <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.books?.map(b => (
                  <li key={b.id}>
                  <Book books={b} onChangeShelf={props.AM9}/>
                  </li>
                ))}
              </ol>
            </div>
          </div>)
}

export default Shelves;