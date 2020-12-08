import React, { useCallback, useEffect, useState } from 'react';

import moment from 'moment';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
	GiftedChat,
	Bubble,
	InputToolbar,
	Composer,
} from 'react-native-gifted-chat';
import { connect } from 'react-redux';

import { Creators as MessagesActions } from '../../../../store/ducks/messages';
import styles from './style';

function Chat({
	route,
	uid,
	name,
	listSchedulings,
	requestSendMessage,
	requestGetMessages,
}) {
	const [messages, setMessages] = useState([]);
	const { idScheduling } = route.params;
	// const chat = [];

	// const messages = [];
	// function scrollToBottomComponent() {
	// 	return (
	// 		<View>
	// 			<Image
	// 				source={require('../../../../assets/icon/enviar-mensagem.png')}
	// 				style={styles.icon}
	// 			/>
	// 		</View>
	// 	);
	// }

	function updateMessages(messag) {
		// setMessages(previousMessages => {
		// 	if (previousMessages !== messag) {
		// 		GiftedChat.append(previousMessages, messag);
		// 	}
		// });
		// GiftedChat.append(messages, messag);
	}

	// useEffect(() => {
	// 	requestGetMessages(idScheduling);
	// }, []);

	useEffect(() => {
		// requestGetMessages(idScheduling, updateMessages);
		// console.log('MESSAGES NO USEEFFECT: ', messages);
		listSchedulings.forEach(scheduling => {
			const { chat } = scheduling;
			if (scheduling.id === idScheduling && chat) {
				// setMessages(Object.values(chat));
				setMessages(previousMessages =>
					GiftedChat.append(previousMessages, Object.values(chat))
				);
			}

			// console.log(chat);
			// chat.forEach(message => {
			// });
		});

		// messages.forEach(msg => {
		// 	requestGetMessages(idScheduling, msg);
		// });

		console.log('subiu');

		// return () => {
		// 	setMessages([]);
		// };
	}, [listSchedulings]);

	const user = {
		_id: uid,
		name,
		avatar:
			'https://avatars3.githubusercontent.com/u/52518776?s=460&u=1d8c48d9285bf84bfefbb037a32b818b9af97ebd&v=4',
	};

	// function onSend(msgs) {
	// 	msgs.forEach(msg => {
	// 		requestSendMessage(id, msg);
	// 	});
	// }

	// const onSend = msgs => {
	// 	msgs.forEach(msg => {
	// 		requestSendMessage(idScheduling, msg);
	// 		setMessages(messages.push(msg));
	// 		// requestGetMessages(idScheduling, msg);
	// 		// setMessages(previousMessages => {
	// 		// 	GiftedChat.append(previousMessages, Object.values(chat));
	// 		// 	// console.log(chat);
	// 		// });
	// 	});
	// };

	const onSend = useCallback((newMessage = []) => {
		setMessages(previousMessages =>
			GiftedChat.append(previousMessages, newMessage)
		);
		newMessage.forEach(newMsg => {
			newMsg.createdAt = new Date().getTime();
			requestSendMessage(idScheduling, newMsg);
		});
	}, []);

	moment.locale(`${require('dayjs/locale/pt-br')}`);

	// const onSend = useCallback((msgs = []) => {
	// 	// setMessages(previousMessages =>
	// 	// 	GiftedChat.append(previousMessages, msgs)
	// 	// );

	// 	// sendToRealtime(msgs);
	// }, []);

	return (
		<GiftedChat
			style={{ backgroundColor: 'red' }}
			user={user}
			messages={messages}
			onSend={msgs => onSend(msgs)}
			placeholder='Digite uma mensagem'
			locale='pt-br'
			// scrollToBottomComponent={scrollToBottomComponent}
			renderBubble={props => {
				return (
					<Bubble
						{...props}
						textStyle={{
							left: {
								fontFamily: 'Signika-Regular',
							},
							right: {
								fontFamily: 'Signika-Regular',
							},
						}}
						wrapperStyle={{
							right: {
								backgroundColor: '#6EB4E7',
							},
							left: {
								borderWidth: 1,
								borderColor: '#6EB4E7',
							},
						}}
					/>
				);
			}}
			renderSend={props => {
				const { text, messageIdGenerator, user, onSend } = props;
				return (
					<TouchableOpacity
						style={styles.btnSend}
						onPress={() => {
							if (text && onSend) {
								onSend(
									{
										text: text.trim(),
										user,
										_id: messageIdGenerator(),
									},
									true
								);
							}
						}}
					>
						{text ? (
							<Image
								source={require('../../../../assets/icon/enviar-mensagem.png')}
								style={styles.icon}
							/>
						) : null}
					</TouchableOpacity>
				);
			}}
			renderInputToolbar={props => {
				return (
					<InputToolbar
						{...props}
						containerStyle={{
							color: 'orange',
							backgroundColor: '#159CFD44',
						}}
					/>
				);
			}}
		/>
	);
}

const mapStateToProps = state => ({
	uid: state.authSignIn.user.uid,
	name: state.authSignIn.user.name,
	lastName: state.authSignIn.user.lastName,
	listSchedulings: state.scheduling.listSchedulings,
});

const mapDispatchToProps = dispatch => ({
	requestSendMessage: (idShceduling, messages) =>
		dispatch(MessagesActions.requestSendMessage(idShceduling, messages)),
	requestGetMessages: (idShceduling, msg) =>
		dispatch(MessagesActions.requestGetMessages(idShceduling, msg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
