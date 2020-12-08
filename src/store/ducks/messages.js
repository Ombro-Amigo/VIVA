export const Types = {
	REQUEST_CREATE_MESSAGE: 'REQUEST_CREATE_MESSAGE',
	REQUEST_GET_MESSAGES: 'REQUEST_GET_MESSAGES',
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
	requestGetMessages: (idShceduling, msg) => ({
		type: Types.REQUEST_GET_MESSAGES,
		idShceduling,
		msg,
	}),
};
