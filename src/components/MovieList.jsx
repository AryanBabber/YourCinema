import React, { useState, useEffect } from "react";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { genres } from "../utils/movies/movies.genres";
import { getMoviesByGenre, IMGPATH } from "../utils/movies/movies.utils";

const MovieList = ({ genreId, name, route }) => {
	const [movieList, setMovieList] = useState([]);
	// console.log(name);
	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const movies = await getMoviesByGenre(genreId);
				setMovieList(movies);
			} catch (error) {
				console.log(error);
			}
		};

		fetchMovies();
	}, [genreId]);

	// console.log();
	const navigate = useNavigate();
	const handleNavigate = () => navigate(route);

	return (
		<div className="">
			<div
				className="text-xl font-bold cursor-pointer"
				onClick={handleNavigate}
			>
				Top {name} Movies 〉
			</div>
			<div className="flex gap-5 overflow-hidden">
				{movieList.slice(0, 5).map((movie, idx) => (
					<div
						className="border-2 border-slate-500 min-w-[320px] w-[320px] h-[500px] rounded-xl"
						key={idx}
					>
						<img
							src={IMGPATH + movie.poster_path}
							alt={movie.title}
							className="h-full w-full"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieList;
