import React from 'react';
const Book = ({books}) =>{

        return(
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${books.imageLinks.thumbnail})`,
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select defaultValue={books.shelf ? books.shelf : "none"}>
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
              <div className="book-title">{books.title}</div>
              <div className="book-authors">{books.publisher}</div>
            </div>
          </li>)
 
}

export default Book;