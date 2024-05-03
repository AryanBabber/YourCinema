import React, { useState, useRef } from "react";

const FormInput = ({
	label,
	type = "text", // Default input type
	errorMessage, // Optional error message to display
	validationFn, // Function for single-argument validation
	compareFn, // Function for two-argument validation (e.g., confirm password)
	...props // Spread remaining props for input element
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isValid, setIsValid] = useState(true); // Assume valid initially

	const inputRef = useRef(null);

	const handleFocus = () => {
		setIsFocused(true);
		setIsValid(true); // Reset validity on focus
	};

	const handleBlur = () => {
		if (isFocused) {
			setIsFocused(false);
			if (compareFn) {
				const additionalValue = props.confirmPassword || ""; // Assuming confirmPassword prop for compareFn
				setIsValid(compareFn(props.value, additionalValue));
			} else if (validationFn) {
				setIsValid(validationFn(props.value));
			} else {
				// Handle cases where no validation function is provided (optional)
			}

			console.log(props.value);
		}
	};

	const handleChange = (event) => {
		props.onChange(event); // Pass through onChange handler from props
	};

	const inputClasses = `
    bg-gray-100 text-gray-500 text-lg block w-full border-none rounded-xl border-b-[1px] p-2 focus:outline-none
    ${!isValid && isFocused ? "border-red-500" : "border-gray-700"}
  `;

	return (
		<div
			className={`relative my-[45px] mx-0 border-2 rounded-xl ${inputClasses}`}
		>
			<input
				ref={inputRef}
				className={inputClasses}
				type={type}
				{...props}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			<label
				className={`text-gray-600 text-base absolute pointer-events-none left-2 top-2 transition-all ease duration-300 ${
					props.value.length || isFocused
						? "top-[-14px] text-xs text-black"
						: ""
				}`}
			>
				{label}
			</label>
			{errorMessage && !isValid && (
				<p className="text-red-500 text-sm mt-2">{errorMessage}</p>
			)}
		</div>
	);
};

export default FormInput;
