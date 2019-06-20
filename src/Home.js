import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'


class Home extends React.Component {

  componentDidMount() {
    this.props.updateShelf()
  }

  render() {
    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf name='Currently Reading'
              shelf={this.props.shelf.filter(book => book.shelf === "currentlyReading")}
              updateShelf={this.props.updateShelf}
              shelfId='currentlyReading'
            />
            <BookShelf name='Want To Read'
              shelf={this.props.shelf.filter(book => book.shelf === "wantToRead")}
              updateShelf={this.props.updateShelf}
              shelfId='wantToRead'
            />
            <BookShelf name='Read'
              shelf={this.props.shelf.filter(book => book.shelf === "read")}
              updateShelf={this.props.updateShelf}
              shelfId='read'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home 