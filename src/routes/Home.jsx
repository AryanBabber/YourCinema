import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
import Carousel from "../components/Carousel/Carousel";
import {
	API_URI,
	IMGPATH,
	PAGE_NUMBER,
	getMoviesByGenre,
} from "../utils/movies/movies.utils";
import Loader from "../components/Loader";
import { genres } from "../utils/movies/movies.genres";
import MovieList from "../components/MovieList";

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [page, setPage] = useState(PAGE_NUMBER);
	let isSignedIn = false;
	// const navigate = useNavigate()
	let randomNum = Math.floor(Math.random() * 17);
	useEffect(() => {
		const fetchURI = async () => {
			setLoading(true);
			try {
				const response = await fetch(API_URI);
				if (!response.ok) {
					console.log("Network response was not ok");
				}
				setData(await response.json());
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};
		fetchURI();
	}, []);

	console.log(data);
	// console.log(API_URI);
	// console.log(getMoviesByGenre(16).then(v => console.log(v)).catch(e => console.log(e)));
	console.log(genres);
	return (
		<Fragment>
			{loading ? (
				<div>
					<Loader />
					<Outlet />
				</div>
			) : (
				<div>
					<Outlet />
					<div className="flex flex-col gap-5">
						<Carousel />
						{isSignedIn && (
							<div className="ml-5">
								<h2 className="text-xl font-bold">
									Based on your liking:
								</h2>
								<ul className="flex gap-5">
									<li className="w-[300px] h-[80px] border-2 border-slate-500">
										Movie1
									</li>
									<li className="w-[300px] h-[80px] border-2 border-slate-500">
										Movie2
									</li>
									<li className="w-[300px] h-[80px] border-2 border-slate-500">
										Movie3
									</li>
									<li className="w-[300px] h-[80px] border-2 border-slate-500">
										Movie4
									</li>
								</ul>
							</div>
						)}
						<div className="ml-5">
							<Link
								to="/trending-movies"
								className="text-xl font-bold"
							>
								Trending Movies 〉
							</Link>
							<div className="flex gap-5">
								{data &&
									data.results.slice(0, 5).map((v, i) => (
										<div
											className="border-2 border-slate-500 w-[350px] h-[500px] rounded-xl"
											key={i}
										>
											<img
												src={IMGPATH + v.poster_path}
												alt={v.title}
												className="h-full w-full"
											/>
										</div>
									))}
							</div>
						</div>
						{genres
							.slice(randomNum, randomNum + 3)
							.map((genre, index) => (
								<MovieList
									key={index}
									{...genre}
								/>
							))}
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default Home;
