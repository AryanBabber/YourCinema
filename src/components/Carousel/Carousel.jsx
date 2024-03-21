// import React from 'react'
import CarouselImage from "./CarouselImage";
import Oppenheimer from "../../assets/Oppenheimer.png";
import FFSeven from "../../assets/FFSeven.png";
import AWednesday from "../../assets/AWednesday.jpg";
import { useState, useEffect } from "react";

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = [Oppenheimer, FFSeven, AWednesday];

	// const images = [
	// 	"https://images.unsplash.com/photo-1655611458356-d1d4138f84cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
	// 	"https://images.unsplash.com/photo-1655584252326-a631ef5771d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
	// 	"https://images.unsplash.com/photo-1655634950013-bc6e9ca1911c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
	// 	"https://images.unsplash.com/photo-1655637389009-81207e99c3c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
	// ];

	const handleTransition = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	useEffect(() => {
		const intervalId = setInterval(handleTransition, 2000); // Adjust interval as needed

		return () => clearInterval(intervalId);
	}, [images.length]);

	return (
		<div className="carousel flex overflow-hidden rounded-lg shadow-md h-80 w-80 mx-auto">
			<div className="image-container flex transition duration-400 ease-in-out transform">
				{images.map((image, index) => (
					<CarouselImage
						src={image}
						key={index}
						currentIndex={currentIndex}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
