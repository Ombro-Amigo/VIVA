import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Botao from '../../components/Botao';
import Fundo from '../../components/Fundo';

import ModalConstrucao from '../modalConstrucao';

import FontContext from '../../contexts/styles/styles';

export default function Encaminhamento({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);

	const StylesFontContext = useContext(FontContext);

	return (
		<Fundo>
			<View style={styles.containerTitle}>
				<Text style={StylesFontContext.title1}>O QUE DESEJA?</Text>
			</View>

			<View style={styles.containerLogin}>
					<Text style={StylesFontContext.spam}>Seguir para as opções de login</Text>
					<View style={styles.containerButtonLogin}>
						<Botao
							title="Paciente"
							style={styles.buttonLogin}
							onPress={() => navigation.navigate('LoginPaciente')}
						/>
						<Botao
							title="Psicólogo"
							style={styles.buttonLogin}
							onPress={() => navigation.navigate('LoginPsicologo')}
						/>
					</View>
			</View>

			<View style={styles.containerEmergency}>
					<Botao
						title="Ligar para a Emergência"
						style={styles.buttonEmergency}
						corFundo='#D4CA03'
						corTexto='#000'
						imgStyle={styles.iconEmergency}
						img={require('../../assets/icon/icon_phone_emergency.png')}
						onPress={() => setModalVisible(!modalVisible)}
					/>
					<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
						<Text style={styles.txtEmergency}>Clique aqui para saber mais{"\n"}sobre a ligação de emergência</Text>
					</TouchableOpacity>
			</View>

			<ModalConstrucao modalVisible={modalVisible} setModalVisible={setModalVisible} />
		</Fundo>
	);
}

const styles = StyleSheet.create({
	// Título
	containerTitle: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},

	// Login
	containerLogin: {
		flex: 2,
	},
	containerButtonLogin: {
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
	},
	buttonEmergency: {
		paddingVertical: hp("1.5%"),
		paddingHorizontal: wp("9%"),
	},
	iconEmergency: {
		width: wp("8.5%"),
		height: hp("8.5%"),
		marginLeft: wp("5%"),
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