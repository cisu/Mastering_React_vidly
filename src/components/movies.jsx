import React, {Component} from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import {paginate} from '../utils/paginate';

class Movies extends Component {
  state = {
    // The reason we should initialized this property to an empty array is take some time until we get the data from the server. Until data comes make sure genres and movies are not undefined. Otherwise we going to get a runtime error.
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];

    this.setState({movies: getMovies(), genres: genres});
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({movies});
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  };

  handlePageChange = page => {
    this.setState({currentPage: page});
  };

  handleGenreSelect = genre => {
    this.setState({selectedGenre: genre, currentPage: 1});
  };

  showMsg() {
    if (this.state.getMovies().length === 0) return <p>There are no tags!</p>;

    return <p> These is {this.state.getMovies().length} Movies in Database</p>;
  }

  handleSort = path => {
    console.log(path);
  };

  render() {
    const {length: count} = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className='col'>
          <p>Showing {filtered.length} movies in the database.</p>

          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />

          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
