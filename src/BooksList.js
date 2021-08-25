import React from 'react'
import ReadingSection from './ReadingSection'
import AddBooks from './AddBooks'
const BooksList = props => {
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <ReadingSection
          books={props.books}
          section="Currently Reading"
          shelf='currentlyReading'
          changeBookStatus={(status, book) => props.changeBookStatus(status, book)}/>

          <ReadingSection
          books={props.books}
          section="Want to Read"
          shelf="wantToRead"
          changeBookStatus={(status, book) =>props.changeBookStatus(status, book)}/>

          <ReadingSection
          books={props.books}
          section="Read"
          shelf='read'
          changeBookStatus={(status, book) =>props.changeBookStatus(status, book)}/>
        </div>
      </div>
      <AddBooks/>
    </div>
  )
}
export default BooksList;
