import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-paper';

import styles from './style';

function HeaderChamadas() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Solicitar chamada</Text>
			<View style={styles.areaOpcoes}>
				<TouchableOpacity>
					<Image
						source={require('../../assets/icon/telefone-com-sinal.png')}
						style={styles.icon}
					/>
				</TouchableOpacity>
				<Divider style={styles.divider}/>
				<TouchableOpacity>
					<Image
						source={require('../../assets/icon/camera-video.png')}
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default HeaderChamadas;
