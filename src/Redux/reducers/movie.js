const initialState = {
    movie: {},
    selectedId: null,
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
        default:
            return state;
    }
};

export default movieReducer;
