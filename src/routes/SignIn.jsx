import SignInForm from "../components/Auth/SignInForm";

const SignIn = () => {
	return (
		<div className="flex justify-center items-center w-[900px] border-black relative left-[50%] -translate-x-[50%] mt-5 p-10 rounded-xl drop-shadow-xl shadow-2xl shadow-slate-400">
			<SignInForm />
		</div>
	);
};

export default SignIn;
