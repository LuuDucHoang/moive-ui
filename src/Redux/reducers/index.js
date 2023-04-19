import movieReducer from './movie';
const { combineReducers } = require('redux');

const rootReducer = combineReducers({
    movie: movieReducer,
});
export default rootReducer;
