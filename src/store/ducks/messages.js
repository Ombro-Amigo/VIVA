export const Types = {
	REQUEST_CREATE_MESSAGE: 'REQUEST_CREATE_MESSAGE',
	REQUEST_GET_MESSAGES: 'REQUEST_GET_MESSAGES',
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
		default:
			return state;
	}
}

export const Creators = {
	requestCreateMessage: (idShceduling, messages) => ({
		type: Types.REQUEST_CREATE_MESSAGE,
		idShceduling,
		messages,
	}),
	requestGetMessages: (idShceduling, callback) => ({
		type: Types.REQUEST_GET_MESSAGES,
		idShceduling,
		callback,
	}),
};
