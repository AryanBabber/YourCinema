// import React from 'react'
import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import Bookmarks from "./routes/Bookmarks";
import { Route, Routes, Router } from "react-router-dom";
import TrendingMovies from "./routes/TrendingMovies";
import { genres } from "./utils/movies/movies.genres";
import MovieGenre from "./routes/MovieGenre";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Navigation />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="/sign-up"
						element={<SignUp />}
					/>
					<Route
						path="/sign-in"
						element={<SignIn />}
					/>
					<Route
						path="/bookmarks"
						element={<Bookmarks />}
					/>
					<Route
						path="/trending-movies"
						element={<TrendingMovies />}
					/>
					{genres.map(
						(genre) =>
							genre && (
								<Route
									key={genre.genreId}
									path={`/${genre.route}`}
									element={
										<MovieGenre {...genre} />
									}
								/>
							)
					)}
				</Route>
			</Routes>
		</div>
	);
};

export default App;
