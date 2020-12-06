export const Types = {
	REQUEST_SCHEDULINGS_PATIENT: 'REQUEST_SCHEDULINGS_PATIENT',
	REQUEST_SCHEDULINGS_PSYCHOLOGIST: 'REQUEST_SCHEDULINGS_PSYCHOLOGIST',
	SUCCESS_GET_SCHEDULINGS: 'SUCCESS_GET_SCHEDULINGS',
	EMPTY_GET_SCHEDULINGS: 'EMPTY_GET_SCHEDULINGS',
	FAILED_GET_SCHEDULINGS: 'FAILED_GET_SCHEDULINGS',
	SAVE_DATA_FORM_SCHEDULING: 'SAVE_DATA_FORM_SCHEDULING',
	SUCCESS_GET_PSICO: 'SUCCESS_GET_PSICO',
	REQUEST_POST_SCHEDULING: 'REQUEST_POST_SCHEDULING',
	FAILURE_CREATE_SCHEDULING: 'FAILURE_CREATE_SCHEDULING',
	REQUEST_GET_PSICO: 'REQUEST_GET_PSICO',
	REQUEST_CONFIRM_SCHEDULING: 'REQUEST_CONFIRM_SCHEDULING',
	SUCCESS_CONFIRM_SCHEDULING: 'SUCCESS_CONFIRM_SCHEDULING',
	REQUEST_CANCEL_SCHEDULING: 'REQUEST_CANCEL_SCHEDULING',
	SUCCESS_CANCEL_SCHEDULING: 'SUCCESS_CANCEL_SCHEDULING',
	SUCCESS_SIGN_OUT: 'SUCCESS_SIGN_OUT',

	// UPDATE_LIST_SCHEDULINGS: 'UPDATE_LIST_SCHEDULINGS',
};

const INITIAL_STATE = {
	listSchedulings: null,
	dataScheduling: null,
	listPisco: null,
	loading: false,
	error: null,
};

export default function schedulingReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.REQUEST_SCHEDULINGS_PATIENT:
			return { ...state, loading: true };
		case Types.REQUEST_SCHEDULINGS_PSYCHOLOGIST:
			return { ...state, loading: true };
		case Types.SUCCESS_GET_SCHEDULINGS:
			return {
				...state,
				loading: false,
				listSchedulings: action.schedulings,
			};
		case Types.EMPTY_GET_SCHEDULINGS:
			return {
				...state,
				loading: false,
				listSchedulings: null,
			};
		case Types.FAILED_GET_SCHEDULINGS:
			return {
				...state,
				loading: false,
				error: action.error,
				listAppointments: null,
			};
		case Types.SAVE_DATA_FORM_SCHEDULING:
			return {
				...state,
				dataScheduling: action.partDataScheduling,
			};
		case Types.SUCCESS_GET_PSICO:
			return { ...state, loading: false, listPisco: action.listPisco };
		case Types.FAILURE_CREATE_SCHEDULING:
			console.log('Scheduling error');
			console.log('erro: ', action.error);
			return { ...state, loading: false, error: action.error };
		case Types.REQUEST_CONFIRM_SCHEDULING:
			return {
				...state,
				loading: true,
			};
		case Types.SUCCESS_CONFIRM_SCHEDULING:
			console.log('confirmou');
			return {
				...state,
				loading: false,
				listSchedulings: state.listSchedulings.map(scheduling => {
					const newScheduling = scheduling;
					if (newScheduling.id === action.idScheduling) {
						newScheduling.status = 'Confirmada';
					}
					return newScheduling;
				}),
			};
		case Types.REQUEST_CANCEL_SCHEDULING:
			return {
				...state,
				loading: true,
			};
		case Types.SUCCESS_CANCEL_SCHEDULING:
			console.log('cancelou');
			return {
				...state,
				loading: false,
				listSchedulings: state.listSchedulings.map(scheduling => {
					const newScheduling = scheduling;
					if (newScheduling.id === action.idScheduling) {
						newScheduling.canceled = true;
					}
					return newScheduling;
				}),
			};
		case Types.SUCCESS_SIGN_OUT:
			return { INITIAL_STATE };
		// case Types.UPDATE_LIST_APPOINTMENTS:
		// 	return {
		// 		...state,
		// 		loading: false,
		// 		listAppointments: action.appointments,
		// 	};
		default:
			return state;
	}
}

export const Creators = {
	requestSchedulingsPatient: (uid, typeUser) => ({
		type: Types.REQUEST_SCHEDULINGS_PATIENT,
		uid,
		typeUser,
	}),
	getSchedulingsPsychologist: (uid, typeUser) => ({
		type: Types.REQUEST_SCHEDULINGS_PSYCHOLOGIST,
		uid,
		typeUser,
	}),
	saveDataFormScheduling: partDataScheduling => ({
		type: Types.SAVE_DATA_FORM_SCHEDULING,
		partDataScheduling,
	}),
	requestPostScheduling: (dataScheduling, user, typeUser) => ({
		type: Types.REQUEST_POST_SCHEDULING,
		dataScheduling,
		user,
		typeUser,
	}),
	requestPsico: () => ({
		type: Types.REQUEST_GET_PSICO,
	}),
	requestConfirmScheduling: idScheduling => ({
		type: Types.REQUEST_CONFIRM_SCHEDULING,
		idScheduling,
	}),
	requestCancelScheduling: idScheduling => ({
		type: Types.REQUEST_CANCEL_SCHEDULING,
		idScheduling,
	}),
};
