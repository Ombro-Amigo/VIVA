export const Types = {
	SAVE_DATA_SCHEDULING: 'SAVE_DATA_SCHEDULING',
	REQUEST_CREATE_SCHEDULING: 'REQUEST_CREATE_SCHEDULING',
	FAILURE_CREATE_SCHEDULING: 'FAILURE_CREATE_SCHEDULING',
	REQUEST_PSICO_CREATE_SCHEDULING: 'REQUEST_PSICO_CREATE_SCHEDULING',
	SUCCESS_PSICO_CREATE_SCHEDULING: 'SUCCESS_PSICO_CREATE_SCHEDULING',
	REQUEST_DELETE_SCHEDULING: 'REQUEST_DELETE_SCHEDULING',
};

const INITIAL_STATE = {
	dataScheduling: null,
	listPisco: [],
	loading: false,
	error: null,
};

export default function schedulingReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.SAVE_DATA_SCHEDULING:
			console.log('partDataScheduling', action.partDataScheduling);
			return {
				...state,
				dataScheduling: action.partDataScheduling,
			};
		case Types.SUCCESS_PSICO_CREATE_SCHEDULING:
			console.log('reducer list', action.listPisco)
			return { ...state, loading: false, listPisco: action.listPisco };
		case Types.REQUEST_CREATE_SCHEDULING:
			return { ...state, loading: true };
		case Types.FAILURE_CREATE_SCHEDULING:
			console.log('Scheduling error');
			console.log('erro: ', action.error);
			return { ...state, loading: false, error: action.error };
		default:
			return state;
	}
}

export const Creators = {
	saveDataScheduling: partDataScheduling => ({
		type: Types.SAVE_DATA_SCHEDULING,
		partDataScheduling,
	}),
	requestCreateScheduling: (dataScheduling, user, typeUser) => ({
		type: Types.REQUEST_CREATE_SCHEDULING,
		dataScheduling,
		user,
		typeUser,
	}),
	requestPsicoCreateScheduling: () => ({
		type: Types.REQUEST_PSICO_CREATE_SCHEDULING,
	}),
	requestDeleteScheduling: (idScheduling, user, typeUser) => ({
		type: Types.REQUEST_DELETE_SCHEDULING,
		idScheduling,
		user,
		typeUser,
	}),
};
