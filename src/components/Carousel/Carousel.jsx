/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import AWednesday from "../../assets/AWednesday.jpg";
import FFSeven from "../../assets/FFSeven.png";
import Oppenheimer from "../../assets/Oppenheimer.png";
import CarouselImage from "./CarouselImage";
import { useState, useEffect } from "react";
import {
	UPCOMING_URI,
	API_URI,
	IMGPATH,
} from "../../utils/movies/movies.utils";

const Carousel = () => {
	// const imagesArray1 = [AWednesday, FFSeven, Oppenheimer];
	const [data, setData] = useState(null);
	const [name, setName] = useState("barfi!");
	useEffect(() => {
		const fetchURI = async () => {
			// setLoading(true);
			try {
				const response = await fetch(UPCOMING_URI);
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

	let movieList = data && data.results.slice(0, 7);

	return (
		<div className="w-[1080px] h-[720px] mx-auto mt-0 mb-10">
			<CarouselImage slides={movieList} />
		</div>
	);
};

export default Carousel;
