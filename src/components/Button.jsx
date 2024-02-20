/* eslint-disable react/prop-types */

// import React from 'react'

export const BUTTON_CLASSES = {
	base: "",
	google: "bg-[#4285f4] text-white hover:bg-[#357ae8] hover:border-none",
	inverted:
		"bg-white text-black border-2 border-solid border-black hover:bg-black hover:text-white hover:border-none",
};

const Button = ({ children, btnType, ...props }) => {
	return (
		<button
			className={`min-w-[165px] w-auto h-[50px] tracking-[0.5px] leading-[50px] px-[35px] text-[15px] text-white bg-black uppercase border-none cursor-pointer flex justify-center rounded-[10px] hover:bg-white hover:text-black hover:border-2 hover:border-black hover:border-solid ${BUTTON_CLASSES[btnType]}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
