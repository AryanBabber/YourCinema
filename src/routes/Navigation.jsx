// import React from 'react'
import { Fragment, useEffect } from "react";
import { Outlet } from "react-router";
import CineLogo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import {
	SEARCH_API,
	IMGPATH,
	getData,
	setData,
	movieData,
} from "../utils/movies/movies.utils";
import { useState } from "react";

const Navigation = () => {
	// const [data, setData] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const handleInputValue = (e) => setInputValue(e.target.value);
	const handleSubmit = async (e) => {
		console.log(e.target);
		e.preventDefault();
		try {
			const res = await fetch(SEARCH_API + inputValue);
			if (!res.ok) {
				console.log("Network response was not ok");
			}
			setData(await res.json());
		} catch (error) {
			console.log(error);
		}
	};

	console.log(getData());

	return (
		<Fragment>
			<div className="h-[100px] flex items-center justify-between">
				<Link to="/">
					<CineLogo className="h-[80px] w-full ml-2" />
					{/* LOGO */}
				</Link>
				<div className="w-[50%] h-full flex items-center justify-around">
					<form onSubmit={(e) => handleSubmit(e)}>
						<input
							className="w-[300px] rounded-[20px] bg-slate-300 h-[45px] p-4 border-black border-2 outline-none"
							placeholder="Search movies"
							value={inputValue}
							onChange={handleInputValue}
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

					{/* if signed out: */}
					<div className="flex gap-1 items-center justify-center">
						<Link
							to="/sign-in"
							className="w-[150px] h-[50px] flex items-center justify-center"
						>
							<h2 className="">EXISTING USER?</h2>
						</Link>
						{/* <h2 className="w-[100px] h-[50px] bg-white rounded-[20px]"></h2> */}
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
