import React, { useEffect } from 'react';

import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';

import { Creators as MessagesActions } from '../../../../store/ducks/messages';
import styles from './style';

function Chat({ route, uid, name, requestCreateMessage, requestGetMessages }) {
	const { id } = route.params;

	const messages = [];

	function updateMessages(messag) {
		console.log('foi: ', messag);
	}

	useEffect(() => {
		requestGetMessages(id, updateMessages);
	}, []);

	const user = {
		id: uid,
		name,
		avatar:
			'https://avatars3.githubusercontent.com/u/52518776?s=460&u=1d8c48d9285bf84bfefbb037a32b818b9af97ebd&v=4',
	};

	function onSend(msgs) {
		msgs.forEach(msg => {
			requestCreateMessage(id, msg);
		});
	}

	return (
		<GiftedChat
			user={user}
			messages={messages}
			onSend={msgs => onSend(msgs)}
		/>
	);
}

const mapStateToProps = state => ({
	uid: state.authSignIn.user.uid,
	name: state.authSignIn.user.name,
	lastName: state.authSignIn.user.lastName,
});

const mapDispatchToProps = dispatch => ({
	requestCreateMessage: (idShceduling, messages) =>
		dispatch(MessagesActions.requestCreateMessage(idShceduling, messages)),
	requestGetMessages: (idShceduling, callback) =>
		dispatch(MessagesActions.requestGetMessages(idShceduling, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
