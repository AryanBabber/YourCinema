export const moviesReducer = (state = { movies: [], loading: false, error: null }, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES':
        return { ...state, loading: true };
      case 'MOVIES_FETCHED':
        return { ...state, loading: false, movies: action.payload };
      case 'MOVIES_ERROR':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  