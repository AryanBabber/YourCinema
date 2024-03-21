import { MOVIE_ACTION_TYPES } from "./movies.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const {FETCH_MOVIES, MOVIES_FETCHED, MOVIES_ERROR} = MOVIE_ACTION_TYPES;

export const fetchMovies = () => createAction(FETCH_MOVIES);
  

export const moviesFetched = (movies) =>
	createAction({
		type: MOVIES_FETCHED,
		payload: movies,
	});

export const moviesError = (error) => createAction(MOVIES_ERROR, error);
