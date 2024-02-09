/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";

import FormInput from "./FormInput";
import Button from "./Button";

const defaultFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFields);
	// const [passwordStrength, setPasswordStrength] = useState("");
	const { displayName, email, password, confirmPassword } = formFields;
	// const dispatch =
	const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords do not match")
    }

	setFormFields(defaultFields);
    // console.log(defaultFields)
  };

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
    // console.log(formFields)
	};

	return (
		<div className="flex flex-col w-[500px]">
			<h1 className="text-center text-2xl">Create a new Account</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					onChange={handleChange}
					name="displayName"
					value={displayName}
					required
					autoComplete="off"
				/>
				<FormInput
					label="Email"
					type="email"
					onChange={handleChange}
					name="email"
					value={email}
					required
					autoComplete="off"
				/>
				<FormInput
					label="Password"
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
					required
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
					required
				/>
				
        <Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
