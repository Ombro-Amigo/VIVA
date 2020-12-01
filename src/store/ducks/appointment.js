export const Types = {
	REQUEST_APPOINTMENTS: 'REQUEST_APPOINTMENTS',
	SUCCESS_GET_APPOINTMENT: 'SUCCESS_GET_APPOINTMENT',
	FAILED_GET_APPOINTMENT: 'FAILED_GET_APPOINTMENT',
	EMPTY_GET_APPOINTMENT: 'EMPTY_GET_APPOINTMENT',
	UPDATE_LIST_APPOINTMENTS: 'UPDATE_LIST_APPOINTMENTS',
};

const INITIAL_STATE = {
	listAppointments: null,
	loading: false,
	error: null,
};

export default function appointmentReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.REQUEST_APPOINTMENTS:
			console.log('chamou appointments');
			return { ...state, loading: true };
		case Types.SUCCESS_GET_APPOINTMENT:
			console.log('consultas dentro do appointments: ', action.appointments);
			return {
				...state,
				loading: false,
				listAppointments: action.appointments,
			};
		case Types.EMPTY_GET_APPOINTMENT:
			return {
				...state,
				loading: false,
				listAppointments: null,
			};
		case Types.FAILED_GET_APPOINTMENT:
			return {
				...state,
				loading: false,
				error: action.error,
				listAppointments: null,
			};
		case Types.UPDATE_LIST_APPOINTMENTS:
			return {
				...state,
				loading: false,
				listAppointments: action.appointments,
			};
		default:
			return state;
	}
}

export const Creators = {
	requestAppointments: (uid, typeUser) => ({
		type: Types.REQUEST_APPOINTMENTS,
		uid,
		typeUser,
	}),
};
