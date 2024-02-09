// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = () => {
		// Add your sign in logic here
	};

	const handleSignInWithGoogle = () => {};

	return (
		<div>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSignIn}>Sign In</button>
			<button onClick={handleSignInWithGoogle}>
				Sign In with Google
			</button>
		</div>
	);
};

export default SignIn;
