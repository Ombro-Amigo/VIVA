export const Types = {
	REQUEST_SIGN_IN: 'REQUEST_SIGN_IN',
	SUCCESS_SIGN_IN: 'SUCCESS_SIGN_IN',
	FAILURE_SIGN_IN: 'FAILURE_SIGN_IN',
	FAILURE_TYPE_USER: 'FAILURE_TYPE_USER',
	REQUEST_SIGN_OUT: 'REQUEST_SIGN_OUT',
	SUCCESS_SIGN_OUT: 'REQUEST_SIGN_OUT',
	FAILURE_SIGN_OUT: 'REQUEST_SIGN_OUT',
	CLEAR_AUTH_ERROR: 'CLEAR_AUTH_ERROR',
	REQUEST_FACEBOOK_SIGN_IN: 'REQUEST_FACEBOOK_SIGN_IN',
};

const INITIAL_STATE = {
	user: null,
	typeUser: null,
	loading: false,
	error: null,
};

export default function authSignInReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.REQUEST_SIGN_IN:
			return { ...state, loading: true };
		case Types.SUCCESS_SIGN_IN:
			console.log('login success');
			console.log('user: ', action.user);
			return {
				user: action.user,
				loading: false,
				error: null,
				typeUser: action.typeUser,
			};
		case Types.FAILURE_SIGN_IN:
			console.log('login error');
			console.log('erro: ', action.error);
			return { ...state, loading: false, error: action.error };
		case Types.FAILURE_TYPE_USER:
			console.log('Tipo usuário errado');
			console.log(action.error);
			return { user: null, loading: false, error: action.error };
		case Types.SUCCESS_SIGN_OUT:
			console.log('out success');
			return {
				user: null,
				loading: false,
				error: null,
				typeUser: action.typeUser,
			};
		case Types.FAILURE_SIGN_OUT:
			console.log('out error');
			return {
				user: null,
				loading: false,
				error: action.error,
				typeUser: action.typeUser,
			};
		case Types.CLEAR_AUTH_ERROR:
			// console.log('limpando erros de autenticação');
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
}

export const Creators = {
	requestSignIn: credentials => ({
		type: Types.REQUEST_SIGN_IN,
		credentials,
	}),
	requestSignOut: () => ({
		type: Types.REQUEST_SIGN_OUT,
	}),
	clearAuthError: () => ({
		type: Types.CLEAR_AUTH_ERROR,
	}),
	requestFacebookSignIn: () => ({
		type: Types.REQUEST_FACEBOOK_SIGN_IN,
	}),
};
