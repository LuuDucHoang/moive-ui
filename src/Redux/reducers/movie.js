const initialState = {
    movie: {},
    movieType: 'movie',
};

const movieReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'ADD': {
            let newMovie = state.movie;
            newMovie = action.payload;
            return {
                ...state,
                movie: newMovie,
            };
        }
        case 'CHANGE': {
            let newMovieType = state.movieType;
            newMovieType = action.payload;
            return {
                ...state,
                movieType: newMovieType,
            };
        }
        default:
            return state;
    }
};

export default movieReducer;
