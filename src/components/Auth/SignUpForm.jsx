import { useState } from "react";

import FormInput from "../FormInput"; // Updated FormInput
import Button from "../Button";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import {
	checkEmail,
	checkPassword,
	checkUsername,
	checkConfirmPassword,
} from "../../utils/auth/user.parameters";

const defaultFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => setFormFields(defaultFields);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			console.log(user);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log("user creation encountered an error", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const emailErrorMessage = "Please enter a valid email address.";
	const passwordErrorMessage = "Password must be at least 8 characters long.";
	const confirmPasswordErrorMessage = "Passwords do not match.";

	return (
		<div className="flex flex-col w-[500px]">
			<h1 className="text-center text-2xl">SIGN UP</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					onChange={handleChange}
					name="displayName"
					value={displayName}
					validationFn={(username) => checkUsername(username)}
					required
					autoComplete="off"
				/>
				<FormInput
					label="Email"
					type="email"
					onChange={handleChange}
					name="email"
					value={email}
					validationFn={(value) => checkEmail(value)}
					required
					autoComplete="off"
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
				<FormInput
					label="Confirm Password"
					type="password"
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
					validationFn={(password, confirmPassword) =>
						checkConfirmPassword(password, confirmPassword)
					}
					required
					errorMessage={confirmPasswordErrorMessage}
				/>

				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
