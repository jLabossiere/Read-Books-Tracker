import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'
import { Link } from "react-router-dom";


class Search extends React.Component {
  state = {
    searchValue: '',
    activeSearch: []
  }

  searchValue = e => {
    let value = e.target.value
    this.setState({
      searchValue: value,
    })

    BooksAPI.search(e.target.value).then(books => {
      if (books === undefined || books.error) {
        return []
      } else {
        return books.map(book => {
          if (this.props.shelf.findIndex(i => i.id === book.id) !== -1) {
            return this.props.shelf[this.props.shelf.findIndex(i => i.id === book.id)]
          } else {
            return { ...book, shelf: 'none' }
          }
        })
      }
    }).then(books => {
      this.setState({
        activeSearch: books
      })
    })
  }

  componentDidMount() {
    this.props.updateShelf()
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search" >Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text" value={this.state.searchValue}
              onChange={this.searchValue}
              placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.activeSearch === undefined ? '' : this.state.activeSearch.map(book => {
              return (
                <li key={book.id} >
                  <Book
                    book={book}
                    updateShelf={this.props.updateShelf}
                    shelf={book.shelf}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search 