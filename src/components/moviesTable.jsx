import React, {Component} from 'react';
import Like from './common/like';
import TableBody from './common/tableBody';
import TaleHeader from './common/tableHeader';

// const x = <Like></Like>; // React Element{}

class MoviesTable extends Component {
  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {
      key: 'like',
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: 'delete',
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className='btn btn-danger btn-sm'
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const {movies, onDelete, onLike, onSort, sortColumn} = this.props;

    return (
      <table className='table'>
        <TaleHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody columns={this.columns} data={movies} />
      </table>
    );
  }
}

export default MoviesTable;
