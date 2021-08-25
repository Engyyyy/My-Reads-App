import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component{
  state={
    input: '',
  }
  handleOnChange = event => {
    this.setState({input: event.target.value})

    this.props.handleSearch(event.target.value)
  }
  render(){
    return(
      <div className="search-books-bar">
        <Link to='/' className='close-search' />
        <div className="search-books-input-wrapper">
          <input
          type="text"
          placeholder="Search by title or author"
          value={ this.state.input }
          onChange={ this.handleOnChange }/>
        </div>
      </div>
    )
  }
}
export default SearchBar
