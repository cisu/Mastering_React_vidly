import * as genresAPI from './fakeGenreService';

const movies = [
    {
        _id: "5b21ca3eed7f6fbccd471815",
        title: "Terminator",
        genre: { _id: "5b21ca3eed7f6fbccd471815", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: '2018-01-03T19:04:28.809z',
        liked: true
    },
    {
        _id: "5b21ca3eed7f6fbccd471816",
        title: "Die Hard",
        genre: { _id: "5b21ca3eed7f6fbccd471816", name: 'Action' },
        numberInStock: 5,
        dailyRentalRate: 2.5,
    },
    {
        _id: "5b21ca3eed7f6fbccd471817",
        title: "Get Out",
        genre: { _id: "5b21ca3eed7f6fbccd471817", name: 'Thriller' },
        numberInStock: 8,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eed7f6fbccd471818",
        title: "Trip to italy",
        genre: { _id: "5b21ca3eed7f6fbccd471818", name: 'Comedy' },
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eed7f6fbccd471819",
        title: "Airplane",
        genre: { _id: "5b21ca3eed7f6fbccd471819", name: 'Comedy' },
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eed7f6fbccd471820",
        title: "Wedding Crashers",
        genre: { _id: "5b21ca3eed7f6fbccd471820", name: 'Comedy' },
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eed7f6fbccd471821",
        title: "Gone Girl",
        genre: { _id: "5b21ca3eed7f6fbccd471821", name: 'Thriller' },
        numberInStock: 7,
        dailyRentalRate: 4.5,
    },
    {
        _id: "5b21ca3eed7f6fbccd471822",
        title: "The Sixth Sense",
        genre: { _id: "5b21ca3eed7f6fbccd471822", name: 'Thriller' },
        numberInStock: 4,
        dailyRentalRate: 3.5,
    },
    {
        _id: "5b21ca3eed7f6fbccd471823",
        title: "The Avengers",
        genre: { _id: "5b21ca3eed7f6fbccd471823", name: 'Thriller' },
        numberInStock: 7,
        dailyRentalRate: 3.5,
    },
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m.id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m.id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movie.dailyRentalRate = movie.dailyRentalRate;
}

// if (!movieInDb._id){

// }