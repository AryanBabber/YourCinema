// import React from 'react'
import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Navigation />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="/sign-up"
						element={<SignUp />}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
