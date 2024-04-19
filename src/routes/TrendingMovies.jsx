import React, { useState, useEffect } from "react";
import { API_URI, IMGPATH } from "../utils/movies/movies.utils";

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
						className=" w-[400px] h-[500px] rounded-xl my-20"
						key={i}
					>
						<p className="text-2xl">#{i + 1}</p>
						<img
							src={IMGPATH + v.poster_path}
							alt={v.title}
							className="h-full w-full rounded-xl"
						/>
					</div>
				))}
		</div>
	);
};

export default TrendingMovies;
