export const selectCurrentUser = (state) => {
	console.log(state.user);
	return state.user && state.user.currentUser;
	// return state.user.currentUser;
};
