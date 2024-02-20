import { Fragment } from "react";
import { Outlet } from "react-router";

const Home = () => {
	return (
		<Fragment>
			<Outlet />
			<div className="text-4xl">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</Fragment>
	);
};

export default Home;
