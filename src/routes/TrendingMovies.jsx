import React, { useState, useEffect } from "react";
import {
	API_URI,
	IMGPATH,
	getGenre,
	releaseDateFormat,
} from "../utils/movies/movies.utils";

const TrendingMovies = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchURI = async () => {
			// setLoading(true);
			try {
				const response = await fetch(API_URI);
				if (!response.ok) {
					console.log("Network response was not ok");
				}
				setData(await response.json());
			} catch (e) {
				console.log(e);
			} finally {
				// setLoading(false);
			}
		};
		fetchURI();
	}, []);
	return (
		<div className="ml-5">
			<h1 className="text-3xl mt-32">TRENDING MOVIES RIGHT NOW</h1>
			{data &&
				data.results.map((v, i) => (
					<div
						className="my-20"
						key={i}
					>
						<p className="text-2xl">#{i + 1}</p>
						<div className="flex gap-10 cursor-default">
							<img
								src={IMGPATH + v.poster_path}
								alt={v.title}
								className="w-[400px] h-[500px] rounded-xl"
							/>
							<div className="mt-10">
								<h1 className="text-3xl">{v.title}</h1>
								<h2 className="text-2xl">
									Released on:{" "}
									{releaseDateFormat(v.release_date)}
								</h2>
								<p className="text-xl">Overview:</p>
								<p className="text-lg w-[70%]">{v.overview}</p>
								<p>
									Genres:{" \n"}
									{v &&
										v.genre_ids
											.map((g) => getGenre(g))
											.join(", ")}
								</p>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default TrendingMovies;
