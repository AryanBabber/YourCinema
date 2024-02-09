/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormInput = ({ label, ...props }) => {
	const [inputValue, setInputValue] = useState("");
	const [shrink, setShrink] = useState(false);

	const handleInputValue = (e) => {
		setInputValue(e.target.value);
		// setShrink(inputValue > 0)
		// if(inputValue.length > 0) {
		// }
	};



	// console.log(inputValue)
	return (
		<div className="relative my-[45px] mx-0">
			<input
				className="bg-none bg-gray-100 text-gray-500 text-lg py-[10px] pr-[10px] pl-[5px] block w-full border-none rounded-none border-b-[1px] border-gray-700 my-6 focus:outline-none"
				{...props}
			/>
			{label && (
				<label
					className={`text-gray-600 text-base absolute pointer-events-none left-1 top-2 transition-all ease duration-300 ${
						props.value.length
							? "top-[-14px] text-xs text-black"
							: ""
					}`}
					// value={inputValue}
					// onChange={handleInputValue}
					// type="text"
				>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
