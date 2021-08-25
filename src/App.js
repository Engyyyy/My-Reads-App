import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    books: [],
  }

  changeBookStatus = (statusValue, book) => {
    BooksAPI.update(book, statusValue)
    const otherBooks = this.state.books.filter(b => b.id !== book.id)
    book.shelf = statusValue;
    this.setState(prevState => ({
      books: [...otherBooks, book],
    }))
  }
  componentDidMount(){
    BooksAPI.getAll().then(books => this.setState({
      books: books,
    }))
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList books={this.state.books}
          changeBookStatus={this.changeBookStatus}/>
        )} />
        <Route path='/search' render={() => (
          <SearchBooks changeBookStatus={this.changeBookStatus}
          books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
