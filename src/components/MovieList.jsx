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
		<div className="ml-5">
			<div
				className="text-xl font-bold"
				onClick={handleNavigate}
			>
				Top {name} Movies 〉
			</div>
			<div className="flex gap-5 flex-nowrap">
				{movieList.slice(0, 5).map((movie, idx) => (
					<div
						className="border-2 border-slate-500 w-[350px] h-[500px] rounded-xl"
						key={idx}
					>
						<img
							src={IMGPATH + movie.poster_path}
							alt={movie.title}
							className="h-full w-full"
						/>
					</div>
				))}
				{/* <div className="w-[300px] h-[80px] border-2 border-slate-500">
					Movie1
				</div> */}
			</div>
		</div>
	);
};

export default MovieList;
