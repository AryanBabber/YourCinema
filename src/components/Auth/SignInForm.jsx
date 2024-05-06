import { useState } from "react";

import FormInput from "../FormInput"; // Updated FormInput component
import Button from "../Button";

// import {
// 	signInAuthUserWithEmailAndPassword,
// 	signInWithGooglePopup,
// } from "../../utils/firebase/firebase.utils";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import { checkEmail, checkPassword } from "../../utils/auth/user.parameters";
import { useDispatch } from "react-redux";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));
			resetFormFields();
		} catch (error) {
			console.log("user sign in failed", error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const emailErrorMessage = "Please enter a valid email address.";
	const passwordErrorMessage = "Password must be at least 8 characters long."; // Update as needed

	return (
		<div className="flex flex-col w-[500px]">
			<h1 className="text-center text-2xl">SIGN IN</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					onChange={handleChange}
					name="email"
					value={email}
					validationFn={(email) => checkEmail(email)}
					required
					autoComplete="off"
					errorMessage={emailErrorMessage}
				/>
				<FormInput
					label="Password"
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
					validationFn={(password) => checkPassword(password)}
					required
					errorMessage={passwordErrorMessage}
				/>

				<div className="flex gap-6">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						onClick={signInWithGoogle}
					>
						Sign In with Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
