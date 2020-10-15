// import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Botao from '../../components/Botao';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Fundo from '../../components/Fundo';

export default function Encaminhamento() {
return (
	<Fundo>
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
					img={require('../../../assets/icon/icon_phone_emergency.png')}
				/>
				<TouchableOpacity>
					<Text style={styles.txtEmergency}>Clique aqui para saber mais{"\n"}sobre a ligação de emergência</Text>
				</TouchableOpacity>
		</View>
	</Fundo>
);
}

const styles = StyleSheet.create({
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
		fontSize: wp("7%"),
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
		fontSize: wp("4%"),
		marginBottom: hp("3.2%"),
	},
	containerButtonLogin: {
		// flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	buttonLogin: {
		paddingHorizontal: wp("9.5%"),
		paddingVertical: hp("3%"),
	},

	// Emergência
	containerEmergency: {
		flex: 3,
		alignItems: 'center',
		// backgroundColor: '#00f',
	},
	buttonEmergency: {
		paddingVertical: hp("1.5%"),
		paddingHorizontal: wp("9%"),
	},
	iconEmergency: {
		width: wp("8.5%"),
		height: hp("8.5%"),
		aspectRatio: 1,
	},
	txtEmergency: {
		marginTop: hp("3%"),
		color: '#fff',
		fontWeight: 'bold',
		fontSize: wp("3.3%"),
		textAlign: 'center',
	},
});