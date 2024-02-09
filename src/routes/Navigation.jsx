// import React from 'react'
import { Fragment } from "react";
import { Outlet } from "react-router";
import CineLogo from "../assets/logo.svg?react";
import { Link } from "react-router-dom";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
	return (
		<Fragment>
			<div className="h-[100px] flex items-center justify-between">
				<Link to="/">
					<CineLogo className="h-[80px] w-full ml-2" />
					{/* LOGO */}
				</Link>
				<div className="w-[50%] h-full flex items-center justify-around">
					<input
						className="w-[300px] rounded-[20px] bg-slate-300 h-[45px] p-2 border-black border-2 outline-none"
						placeholder="Search movies"
					>
						{/* Search bar */}
					</input>

					{/* FAVORITES SECTION */}
					<Link to="bookmarks">
						<BookmarkSquareIcon className="w-8" />
					</Link>

					{/* if signed out: */}
					<div className="flex gap-1 items-center justify-center">
						<Link to="/sign-in" className="w-[150px] h-[50px] flex items-center justify-center">
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
