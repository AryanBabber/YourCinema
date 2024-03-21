import { Fragment } from "react";
import { Outlet } from "react-router";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
	return (
		<Fragment>
			<Outlet />
			<div className="flex flex-col gap-5">
				<Carousel />
				<div>
					<h2 className="text-xl font-bold">Based on your liking:</h2>
					<ul>
						<li>Movie1</li>
						<li>Movie2</li>
						<li>Movie3</li>
						<li>Movie4</li>
					</ul>
				</div>
				<div>
					<h2 className="text-xl font-bold">Genre</h2>
					<ul>
						<li>Movie1</li>
						<li>Movie2</li>
						<li>Movie3</li>
						<li>Movie4</li>
					</ul>
				</div>
				<div>
					<h2 className="text-xl font-bold">Genre</h2>
					<ul>
						<li>Movie1</li>
						<li>Movie2</li>
						<li>Movie3</li>
						<li>Movie4</li>
					</ul>
				</div>
				<div>
					<h2 className="text-xl font-bold">Genre</h2>
					<ul>
						<li>Movie1</li>
						<li>Movie2</li>
						<li>Movie3</li>
						<li>Movie4</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
