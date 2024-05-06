// import React from 'react'
import { Fragment, useEffect } from "react";
import { Outlet } from "react-router";
import CineLogo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { SEARCH_API, IMGPATH } from "../utils/movies/movies.utils";
// import { setData, getData, movieData } from "../utils/search/searchData";
import { useState } from "react";
import { setData, getData, data } from "../utils/search/searchData";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { signOutStart } from "../store/user/user.action";

const Navigation = () => {
	// const [data, setData] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const handleInputValue = (e) => setInputValue(e.target.value);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch(SEARCH_API + inputValue);
			if (!res.ok) {
				console.log("Network response was not ok");
			}
			let searchData = await res.json();
			console.log(searchData);
			setData(searchData);
		} catch (error) {
			console.log(error);
		}
	};

	// console.log(getData());
	// console.log(data);
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);

	const signOutUser = () => dispatch(signOutStart());

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
					{currentUser ? (
						<div className="flex gap-1 items-center justify-center">
							<Link
								as="span"
								onClick={signOutUser}
								className="w-[150px] h-[50px] flex items-center justify-center"
							>
								SIGN OUT
							</Link>
						</div>
					) : (
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
								<h2 className="text-center text-white">
									SIGN UP
								</h2>
							</Link>
						</div>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
