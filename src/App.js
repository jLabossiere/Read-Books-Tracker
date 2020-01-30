import React from 'react'
import './App.css'
import Home from './Home'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    myShelf: []
  }

  updateShelf() {
    BooksAPI.getAll().then(shelf => {
      this.setState({
        myShelf: shelf
      })
    })
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path='/' render={() => {
            return (
              <>
                <Home
                  updateShelf={this.updateShelf.bind(this)}
                  shelf={this.state.myShelf}
                />
                <div className="open-search">
                  <Link to='/search'><button>Add a book</button></Link>
                </div>
              </>
            )
          }} />
          <Route path='/search' render={() => {
            return (
              <>
                <Search
                  updateShelf={this.updateShelf.bind(this)}
                  shelf={this.state.myShelf}
                />
              </>
            )
          }} />
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
