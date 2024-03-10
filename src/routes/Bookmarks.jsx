import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BookmarksComponent from "../components/BookmarksComponent";

const Bookmarks = () => {
	const [isSignedIn, setIsSignedIn] = useState(false); // setting this for now, have to use redux in order to catch this state.

	return (
		<Fragment>
			{isSignedIn ? (
				<BookmarksComponent />
			) : (
				<div>
					<h1 className="text-center my-4">
						Please Sign In to access bookmarks
					</h1>
					<div className="flex gap-1 items-center justify-center">
						<Link
							to="/sign-in"
							className="w-[150px] h-[50px] flex items-center justify-center"
						>
							<h2 className="">SIGN IN</h2>
						</Link>
						{/* <h2 className="w-[100px] h-[50px] bg-white rounded-[20px]"></h2> */}
						<Link
							to="/sign-up"
							className="w-[100px] h-[50px] bg-[#3f3f3f] rounded-[20px] flex items-center justify-center"
						>
							<Button className="text-center text-white">
								SIGN UP
							</Button>
						</Link>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default Bookmarks;
