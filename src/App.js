import React, { Component } from 'react';
import './App.css';
import MovieRow from './Movies/Row';
import { api_key } from './private/secrets';
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {} 
    this.performSearch()
  }

  performSearch(query) {
    console.log("Perform search using moviedb")
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}`

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results
        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path
          movieRows.push(<MovieRow key={movie.id} movie={movie} />)
        })

        this.setState({movies: movieRows})
      },
      error: (xhr, status, err) => { 
        console.log("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    this.performSearch(event.target.value)
  }

  render() {
    return (
      <div className="App">
        <table className="navBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src="green_logo.svg" />
              </td>
              <td width="8"/>
              <td>
                <h1>MoviesDB Searcher</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input className="navBar-input" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter your search term"/>

        {this.state.movies}
      </div>
    );
  }
}

export default App;
