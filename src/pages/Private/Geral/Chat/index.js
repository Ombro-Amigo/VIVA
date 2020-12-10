import React, { useEffect, useState } from 'react';

import moment from 'moment';
import { View, Image, TouchableOpacity } from 'react-native';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import { ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';

import HeaderChamadas from '../../../../components/HeaderChamadas/index';
import { Creators as MessagesActions } from '../../../../store/ducks/messages';
import styles from './style';

function Chat({
	route,
	uid,
	name,
	requestTurnOffListener,
	requestSendMessage,
	requestGetMessages,
}) {
	const [messages, setMessages] = useState([]);
	const { idScheduling } = route.params;

	useEffect(() => {
		const callback = (message = []) => {
			setMessages(previousMessages =>
				GiftedChat.append(previousMessages, message)
			);
		};

		requestGetMessages(idScheduling, callback);
		console.log('subiu');

		return () => {
			requestTurnOffListener(idScheduling);
		};
	}, []);

	const user = {
		_id: uid,
		name,
		avatar:
			'https://avatars3.githubusercontent.com/u/52518776?s=460&u=1d8c48d9285bf84bfefbb037a32b818b9af97ebd&v=4',
	};

	moment.locale(`${require('dayjs/locale/pt-br')}`);

	return (
		<>
			<HeaderChamadas />
			<GiftedChat
				style={{ backgroundColor: 'red' }}
				user={user}
				messages={messages}
				onSend={msgs => requestSendMessage(idScheduling, msgs)}
				placeholder='Digite uma mensagem'
				locale='pt-br'
				renderLoading={() => <ActivityIndicator />}
				renderAvatar={null}
				isTyping={true}
				minInputToolbarHeight={55}
				scrollToBottom
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
							containerStyle={styles.inputMessageArea}
							placeholderTextColor='#FFF'
						/>
					);
				}}
				scrollToBottomComponent={props => {
					return (
						<View {...props}>
							<Image
								source={require('../../../../assets/icon/seta-para-baixo.png')}
								style={styles.scrollToBottomIcon}
							/>
						</View>
					);
				}}
				scrollToBottomStyle={styles.scrollToBottomContainer}
			/>
		</>
	);
}

const mapStateToProps = state => ({
	uid: state.authSignIn.user.uid,
	name: state.authSignIn.user.name,
	lastName: state.authSignIn.user.lastName,
});

const mapDispatchToProps = dispatch => ({
	requestSendMessage: (idShceduling, messages) =>
		dispatch(MessagesActions.requestSendMessage(idShceduling, messages)),
	requestGetMessages: (idShceduling, callbakc) =>
		dispatch(MessagesActions.requestGetMessages(idShceduling, callbakc)),
	requestTurnOffListener: idShceduling =>
		dispatch(MessagesActions.requestTurnOffListener(idShceduling)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
