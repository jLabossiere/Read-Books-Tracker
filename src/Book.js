import React from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
  state = {
    status: ''
  }

  statusChange(e) {
    BooksAPI.update(this.props.book, e.target.value)
      .then(
        this.setState({
          status: e.target.value,
        }))
      .then(this.props.updateShelf())
  }

  componentDidMount() {
    this.setState({
      status: this.props.shelf
    })
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${this.props.book.imageLinks === undefined ? '' :
              this.props.book.imageLinks.thumbnail})`
          }}></div>
          <div className={`book-shelf-changer ${this.state.status}`} >
            <select
              value={this.state.status}
              onChange={(e) => {
                return this.statusChange(e)
              }
              }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <ol className="book-authors">{
          this.props.book.authors === undefined ? '' :
            this.props.book.authors.map(author => <li key={author}>{author}</li>)
        }</ol>
      </div >
    )
  }
}

export default Book