import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import { search } from './BooksAPI'
class SearchBooks extends React.Component{
  state={
    searchedBooks: [],
    isFound: true,
  }
  onSearch = (query) => {

    if(query === '') {
      this.setState({ searchedBooks: [], isFound: true })
    }
    else{
      search(query).then(books => {
        if(Array.isArray(books) && books.length !== 0){
          books.forEach(searchedBook => {
            let status = 'none'
            this.props.books.forEach(currentBook => {
              if(searchedBook.id === currentBook.id) status = currentBook.shelf;
            })
            searchedBook.shelf = status;
          })
          this.setState({ searchedBooks: books, isFound: true })
        }
        else this.setState({searchedBooks: [], isFound: false})
      })
    }
  }
  render(){
    return(
      <div className="search-books">
        <SearchBar handleSearch={ this.onSearch }
        input={this.state.input}/>
        <SearchResults books={this.state.searchedBooks}
        changeBookStatus={(value, book) => {this.props.changeBookStatus(value, book)}}
        isFound={this.state.isFound} />
      </div>
    )
  }
}
export default SearchBooks
