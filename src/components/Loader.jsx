import React from "react";

const Loader = () => {
	const styles = {
		spinner: {
			width: "60px",
			height: "60px",
			border: "5px solid #f3f3f3",
			borderRadius: "50%",
			borderLeftColor: "#3498db",
			animation: "spin 1s linear infinite",
		},
		"@keyframes spin": {
			from: { transform: "rotate(0deg)" },
			to: { transform: "rotate(360deg)" },
		},
	};

	return <div style={styles.spinner}></div>;
};

export default Loader;
