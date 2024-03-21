// import React from 'react'

const CarouselImage = (index, image, currentIndex) => {
	return (
		<img
			key={index}
			src={image}
			alt="img"
			className={`h-full w-full object-cover cursor-pointer absolute ${
				currentIndex === index ? "" : "-translate-x-full"
			}`}
		/>
	);
};

export default CarouselImage;
