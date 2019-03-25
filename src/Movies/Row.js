import React, { Component } from 'react';

class MovieRow extends Component {
    render() {
        const movie = this.props.movie
        return <table key={movie.id}>
        <tbody>
            <tr>
            <td>
                <img alt="poster" width="120" src={this.props.movie.poster_src}/>
            </td>
            <td>
                {movie.title}
                <p>{movie.overview}</p>
            </td>
            </tr>
        </tbody>
        </table>    
    }
}

export default MovieRow