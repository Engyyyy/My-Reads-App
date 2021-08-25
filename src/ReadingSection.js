import React from 'react';
import Book from './Book';
const ReadingSection = props => {
  const {section, shelf} = props;
  const books = props.books.filter(book => book.shelf === shelf);
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{section}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {books.map(book => (<Book book={book}
              changeStatus={value => props.changeBookStatus(value, book)}
              key={book.id}/>))}
        </ol>
      </div>
    </div>
  )
}

export default ReadingSection;
