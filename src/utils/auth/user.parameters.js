export const checkUsername = (username) =>
	username.length > 3 && /^[a-zA-Z0-9._]+$/.test(username);

export const checkEmail = (email) =>
	/^[_a-zA-Z0-9.]+@[_a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);

export const checkPassword = (password) =>
	/^(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@\$!%*#?&]{8,}$/.test(password);

export const checkConfirmPassword = (password, confirmPassword) => password === confirmPassword;
