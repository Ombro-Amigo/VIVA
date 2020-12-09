export const Types = {
	REQUEST_CREATE_MESSAGE: 'REQUEST_CREATE_MESSAGE',
	REQUEST_GET_MESSAGES: 'REQUEST_GET_MESSAGES',
	REQUEST_TURN_OFF_LISTENER: 'REQUEST_TURN_OFF_LISTENER',
};

const INITIAL_STATE = {};

export default function messagesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export const Creators = {
	requestSendMessage: (idShceduling, messages) => ({
		type: Types.REQUEST_CREATE_MESSAGE,
		idShceduling,
		messages,
	}),
	requestGetMessages: (idShceduling, callback) => ({
		type: Types.REQUEST_GET_MESSAGES,
		idShceduling,
		callback,
	}),
	requestTurnOffListener: idShceduling => ({
		type: Types.REQUEST_TURN_OFF_LISTENER,
		idShceduling,
	}),
};
