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
        case 'INDEX': {
            let newIndex = state.index;
            newIndex = action.payload;
            return {
                ...state,
                selectedId: newIndex,
            };
        }
        default:
            return state;
    }
};

export default movieReducer;
