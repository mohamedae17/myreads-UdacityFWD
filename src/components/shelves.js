import Book from "./Book";

import React from 'react';


const Shelves= ({title,books}) =>{
    return( 
          <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books?.map(b => (
                  <Book books={b}/>
                ))}
              </ol>
            </div>
          </div>)
    
}

export default Shelves;