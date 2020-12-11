import React, { useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-paper';

import ModalConstrucao from '../modalConstrucao';
import styles from './style';

function HeaderChamadas() {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.title}>Solicitar chamada</Text>
				<View style={styles.areaOpcoes}>
					<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
						<Image
							source={require('../../assets/icon/telefone-com-sinal.png')}
							style={styles.icon}
						/>
					</TouchableOpacity>
					<Divider style={styles.divider}/>
					<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
						<Image
							source={require('../../assets/icon/camera-video.png')}
							style={styles.icon}
						/>
					</TouchableOpacity>
				</View>
			</View>

			<ModalConstrucao
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
}

export default HeaderChamadas;
