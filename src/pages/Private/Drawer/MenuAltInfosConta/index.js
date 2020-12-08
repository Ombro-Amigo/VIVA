import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';

import Fundo from '../../../../components/Fundo';
import { Creators as UpdateActions } from '../../../../store/ducks/updateAccount';
import styles from './style';

function MenuAltInfosConta({ avatar, uid, resquestUpdateAvatar }) {
	// function imagePickerCallback(data) {
	// 	if (data.didCancel) {
	// 		return;
	// 	}

	// 	if (data.error) {
	// 		return;
	// 	}

	// 	if (data.uri) {
	// 		return;
	// 	}

	// 	resquestUpdateAvatar(data);
	// }

	return (
		<Fundo padding={null}>
			<View style={styles.containerHeader}>
				<Text style={styles.title}>Alterar informações da conta</Text>
			</View>
			<View style={styles.containerInfosUSer}>
				<View style={styles.areaAltFotoUser}>
					<Image
						style={styles.photo}
						source={{
							uri: avatar
								? avatar.uri
								: 'https://firebasestorage.googleapis.com/v0/b/viva-75f70.appspot.com/o/usuario-cards-e-menu.png?alt=media&token=26a17986-d756-46c3-8fa5-cdf9e063d731',
						}}
					/>
					<TouchableOpacity
						style={styles.containerIconCam}
						onPress={() =>{}
							// ImagePicker.showImagePicker({}, data =>
							// 	resquestUpdateAvatar(data, uid)
							// )
						}
					>
						<Image
							style={styles.iconCam}
							source={require('../../../../assets/icon/camera-foto.png')}
						/>
					</TouchableOpacity>
				</View>
				<Text style={styles.txtNome}>Nome de usuário</Text>
			</View>
			<View style={styles.containerOpcoes}>
				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Alterar o nome de usuário</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Alterar o email da conta</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>
							Visualizar o status do seu CRP
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Alterar sua senha</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={[styles.txtOpcao, { color: 'red' }]}>
							Excluir sua conta
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Fundo>
	);
}

const mapStateToProps = state => ({
	uid: state.authSignIn.user.uid,
	avatar: state.authSignIn.user.avatar,
});

const mapDispatchToProps = dispacth => ({
	resquestUpdateAvatar: (avatar, uid) =>
		dispacth(UpdateActions.resquestUpdateAvatar(avatar, uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuAltInfosConta);
