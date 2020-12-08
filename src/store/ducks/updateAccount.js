export const Types = {
	REQUEST_UPDATE_AVATAR: 'REQUEST_UPDATE_AVATAR',
};

const INITIAL_STATE = {
	avatar: null,
};

export default function updateAccountReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		// case Types.REQUEST_UPDATE_AVATAR:

		default:
			return state;
	}
}

export const Creators = {
	resquestUpdateAvatar: (avatar, uid) => ({
		type: Types.REQUEST_UPDATE_AVATAR,
		avatar,
		uid,
	}),
};
