// import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Botao from '../../components/Botao';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Encaminhamento() {
return (
	<View style={styles.container}>
		<View style={styles.containerTitle}>
				<Text style={styles.title}>O QUE DESEJA?</Text>
		</View>

		<View style={styles.containerLogin}>
				<View style={styles.containerTxtLogin}>
					<Text style={styles.txtLogin}>Seguir para as opções de login</Text>
				</View>
				<View style={styles.containerButtonLogin}>
					<Botao title="Paciente" style={styles.buttonLogin} />
					<Botao title="Psicólogo" style={styles.buttonLogin} />
				</View>
		</View>

		<View style={styles.containerEmergency}>
				<Botao
					title="Ligar para a Emergência"
					style={styles.buttonEmergency}
					corFundo='#D4CA03'
					corTexto='#000'
					imgStyle={styles.iconEmergency}
					img={require('../../../assets/icon_phone_emergency.png')}
				/>
				<TouchableOpacity>
					<Text style={styles.txtEmergency}>Clique aqui para saber mais{"\n"}sobre a ligação de emergência</Text>
				</TouchableOpacity>
		</View>
	</View>
);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6EB4E7',
	},

	// Título
	containerTitle: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: '#f00',
	},
	title: {
		color: '#186794',
		fontWeight: 'bold',
		fontSize: 24,
	},

	// Login
	containerLogin: {
		flex: 2,
		// backgroundColor: '#0f0',
	},
	containerTxtLogin: {
		alignItems: 'center',
		// flex: 1,
	},
	txtLogin: {
		color: '#186794',
		fontWeight: 'bold',
		fontSize: 14,
		marginBottom: 20,
	},
	containerButtonLogin: {
		// flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	buttonLogin: {
		paddingHorizontal: 45,
		paddingVertical: 17,
	},

	// Emergência
	containerEmergency: {
		flex: 3,
		alignItems: 'center',
		// backgroundColor: '#00f',
	},
	buttonEmergency: {
		paddingVertical: 10,
		paddingHorizontal: 32,
	},
	iconEmergency: {
		width: 35,
		height: 35,
		aspectRatio: 1,
	},
	txtEmergency: {
		marginTop: 20,
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 12,
		textAlign: 'center',
	},
});