import React from 'react'
import Book from './Book'
const SearchResults = props => {
  return(
    <div className="search-books-results">
      <ol className="books-grid">
        {props.books.length !== 0?
          props.books.map(book =>(
            <Book key={book.id}
            book={book}
            changeStatus={value => props.changeBookStatus(value, book)}/>
          ))
          : props.isFound? <p></p> : <p>No Results Found</p>
        }
      </ol>
    </div>
  )
}

export default SearchResults
