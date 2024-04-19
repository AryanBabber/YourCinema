import { useState } from "react";
import { IMGPATH, getGenre } from "../../utils/movies/movies.utils";

const slideStyles = {
	width: "100%",
	height: "100%",
	borderRadius: "10px",
	backgroundSize: "cover",
	backgroundPosition: "center",
	position: "relative",
};

const rightArrowStyles = {
	position: "absolute",
	top: "50%",
	transform: "translate(0, -50%)",
	right: "32px",
	fontSize: "45px",
	color: "#fff",
	zIndex: 1,
	cursor: "pointer",
};

const leftArrowStyles = {
	position: "absolute",
	top: "50%",
	transform: "translate(0, -50%)",
	left: "32px",
	fontSize: "45px",
	color: "#fff",
	zIndex: 1,
	cursor: "pointer",
};

const sliderStyles = {
	position: "relative",
	height: "100%",
};

const dotsContainerStyles = {
	display: "flex",
	justifyContent: "center",
};

const dotStyle = {
	margin: "0 3px",
	cursor: "pointer",
	fontSize: "20px",
};

const CarouselImage = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};
	const slideStylesWidthBackground = {
		...slideStyles,
		backgroundImage:
			slides && `url(${IMGPATH + slides[currentIndex].backdrop_path})`,
	};

	let rating =
		slides && Math.floor(slides[currentIndex].vote_average * 100) / 10;

	let color = "";
	if (rating < 50) color = "#FF0000";
	else if (rating < 70) color = "#FFBF00";
	else if (rating < 85) color = "#1C7A05";
	else color = "#32FF00";

	return (
		<div style={sliderStyles}>
			<div>
				<div
					onClick={goToPrevious}
					style={leftArrowStyles}
				>
					❰
				</div>
				<div
					onClick={goToNext}
					style={rightArrowStyles}
				>
					❱
				</div>
			</div>
			<div style={slideStylesWidthBackground}>
				<div className="absolute bottom-0 w-full h-[200px] bg-[#d1d1d1] rounded-b-xl">
					<h1 className="text-4xl text-center mt-3">
						{slides && slides[currentIndex].title}
					</h1>
					<h2 className="text-2xl text-center">
						Released on:
						{slides &&
							" " +
								slides[currentIndex].release_date
									.split("-")
									.reverse()
									.join("-")}
					</h2>
					<h2 className="text-2xl text-center mt-3">
						Genres:{" "}
						{slides &&
							slides[currentIndex].genre_ids.map((v, i) => (
								<span
									className="p-2 border-[1px] bg-green-200 text-xl mx-2 rounded-md cursor-pointer"
									key={i}
								>
									{getGenre(v)}
								</span>
							))}
					</h2>
					<div className="w-[200px] h-full bg-black absolute bottom-0 right-0 flex justify-center items-center rounded-br-xl">
						<p
							className="text-2xl text-white h-[100px] w-[100px] rounded-full flex justify-center items-center"
							style={{ backgroundColor: color }}
						>
							{slides && rating}%
						</p>
					</div>
				</div>
			</div>
			<div style={dotsContainerStyles}>
				{slides?.map((_, idx) => (
					<div
						style={dotStyle}
						key={idx}
						onClick={() => goToSlide(idx)}
					>
						●
					</div>
				))}
			</div>
		</div>
	);
};

export default CarouselImage;
