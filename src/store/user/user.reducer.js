import { USER_ACTION_TYPES } from "./user.types";

const INIT_STATE = {
	currentUser: null,
	error: null,
	isLoading: false,
};

const {
	SIGN_IN_SUCCESS,
	SIGN_OUT_SUCCESS,
	SIGN_OUT_FAILED,
	SIGN_IN_FAILED,
	SIGN_UP_FAILED,
} = USER_ACTION_TYPES;

export const userReducer = (state = INIT_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case SIGN_IN_SUCCESS:
			return { ...state, currentUser: payload };
		case SIGN_OUT_SUCCESS:
			return { ...state, currentUser: null };
		case SIGN_OUT_FAILED:
		case SIGN_IN_FAILED:
		case SIGN_UP_FAILED:
			return { ...state, error: payload };
		default:
			return false;
	}
};
