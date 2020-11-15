import { object } from 'yup';

export const Types = {
	SAVE_DATA_REGISTER: 'SAVE_DATA_REGISTER',
	REQUEST_SIGN_UP: 'REQUEST_SIGN_UP',
	FAILURE_SIGN_UP: 'FAILURE_SIGN_UP',
	CLEAR_AUTH_ERROR: 'CLEAR_AUTH_ERROR',
};

const INITIAL_STATE = {
	dataRegister: null,
	loading: false,
	error: null,
};

export default function authSignUpReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.SAVE_DATA_REGISTER:
			console.log('partDataRegister', action.partDataRegister);
			return {
				...state,
				dataRegister: action.partDataRegister,
			};
		case Types.REQUEST_SIGN_UP:
			return { ...state, loading: true };
		case Types.FAILURE_SIGN_UP:
			console.log('signUp error');
			console.log('erro: ', action.error);
			return { ...state, loading: false, error: action.error };
		default:
			return state;
	}
}

export const Creators = {
	saveDataRegister: partDataRegister => ({
		type: Types.SAVE_DATA_REGISTER,
		partDataRegister,
	}),
	requestSignUp: dataRegister => ({
		type: Types.REQUEST_SIGN_UP,
		dataRegister,
	}),
	clearAuthError: () => ({
		type: Types.CLEAR_AUTH_ERROR,
	}),
};
