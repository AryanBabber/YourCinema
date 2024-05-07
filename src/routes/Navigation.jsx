import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import CineLogo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import {
	SEARCH_API,
	IMGPATH,
	searchMovies,
} from "../utils/movies/movies.utils";
import { data, setData } from "../utils/search/searchData";
// import { Outlet } from "react-router-dom";

const Navigation = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState(""); // Search input state
	// const [searchResults, setSearchResults] = useState([]); // Search results state

	const handleInputValue = (e) => setInputValue(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (inputValue) {
			const results = await searchMovies(inputValue);
			// setSearchResults(results); // Update search results state
			navigate(`/search/${inputValue}`); // Navigate to search page
		}
		// setInputValue("");
	};

	// Handle potential search errors (optional)
	// useEffect(() => {
	//   // Add error handling logic here if needed
	// }, []);

	return (
		<Fragment>
			<div className="h-[100px] flex items-center justify-between">
				<Link to="/">
					<CineLogo className="h-[80px] w-full ml-2" />
					{/* LOGO */}
				</Link>
				<div className="w-[50%] h-full flex items-center justify-around">
					<form onSubmit={handleSubmit}>
						<input
							className="w-[300px] rounded-[20px] bg-slate-300 h-[45px] p-4 border-black border-2 outline-none"
							placeholder="Search movies"
							value={inputValue}
							onChange={(e) => handleInputValue(e)}
						/>
					</form>

					{/* FAVORITES SECTION */}
					<Link
						to="bookmarks"
						className="flex gap-3 items-center"
					>
						<BookmarkSquareIcon className="w-8" />
						<span className="text-lg">Watchlist</span>
					</Link>

					{/* SIGN IN/SIGN UP */}
					<div className="flex gap-1 items-center justify-center">
						<Link
							to="/sign-in"
							className="w-[150px] h-[50px] flex items-center justify-center"
						>
							<h2 className="">EXISTING USER?</h2>
						</Link>
						<Link
							to="/sign-up"
							className="w-[100px] h-[50px] bg-[#3f3f3f] rounded-[20px] flex items-center justify-center"
						>
							<h2 className="text-center text-white">SIGN UP</h2>
						</Link>
					</div>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
