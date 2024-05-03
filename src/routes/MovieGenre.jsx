import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
	getMoviesByGenre,
	IMGPATH,
	releaseDateFormat,
	getGenre,
} from "../utils/movies/movies.utils";
import { genres } from "../utils/movies/movies.genres";

const MovieGenre = ({ genreId, name }) => {
	// const { genreId } = useParams(); // Get genre ID from route params
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const movies = await getMoviesByGenre(genreId);
				setMovieList(movies.slice(0, 20)); // Limit to 20 movies
			} catch (error) {
				console.error(error);
			}
		};

		fetchMovies();
	}, [genreId]);

	return (
		<div className="container ml-5 my-5">
			<h1 className="text-3xl my-5">Top {name} Movies</h1>
			{/* <div className="flex gap-5 flex-wrap"> */}
			{movieList.map((movie, idx) => (
				<div
					className="my-20"
					key={idx}
				>
					<p className="text-2xl">#{idx + 1}</p>
					<div className="flex gap-10 cursor-default">
						<img
							src={IMGPATH + movie.poster_path}
							alt={movie.title}
							className="w-[400px] h-[500px] rounded-xl"
						/>
						<div className="mt-10">
							<h1 className="text-3xl">{movie.title}</h1>
							<h2 className="text-2xl">
								Released on:{" "}
								{releaseDateFormat(movie.release_date)}
							</h2>
							<p className="text-xl">Overview:</p>
							<p className="text-lg w-[70%]">{movie.overview}</p>
							<p>
								Genres:{" \n"}
								{movie &&
									movie.genre_ids
										.map((g) => getGenre(g))
										.join(", ")}
							</p>
						</div>
					</div>
				</div>
			))}
			{/* </div> */}
		</div>
	);
};

export default MovieGenre;
