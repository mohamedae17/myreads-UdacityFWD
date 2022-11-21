import React, { useState } from 'react';
import * as BooksAPI from '..//BooksAPI';
const Book = props =>{

  // const handleChange = (event) => {
  //   console.log(event.target.value);
  //   BooksAPI.update(books, event.target.value);
  //   // updateBookShelf(books, event.target.value);
  // };
        return(
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${props.books.imageLinks.thumbnail})`,
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select defaultValue={props.books.shelf ? props.books.shelf : "none"}  onChange={(event) => props.onChangeShelf({book:props.books},{whereTo:event.target.value})}>
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">
                      Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{props.books.title}</div>
              <div className="book-authors">{props.books.publisher}</div>
            </div>)
 
}

export default Book;