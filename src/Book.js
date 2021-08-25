import React from 'react'
import BookStatusSelector from './BookStatusSelector'

const Book = props => {
  const book = props.book;
  let image = '';
  if(book.imageLinks !== undefined) image = book.imageLinks.thumbnail;
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
          style={{ width: 128,
            height: 193,
            backgroundImage: 'url('+image+')'}}>
          </div>
          <BookStatusSelector status={book.shelf}
          changeStatus={value => props.changeStatus(value)}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors !== undefined?
            book.authors.map((author, index) => (<div key={index}>{author}</div>))
            :
            <div/>
          }
        </div>
      </div>
    </li>
  )
}

export default Book;
