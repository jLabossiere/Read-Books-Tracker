import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.shelf.map(book => {
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    updateShelf={this.props.updateShelf}
                    shelf={this.props.shelfId}
                  />
                </li>)
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf