// import React from 'react'
import { Fragment } from "react";
import { Outlet } from "react-router";

const Navigation = () => {
	return (
		<Fragment>
			<div>Navigation</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
