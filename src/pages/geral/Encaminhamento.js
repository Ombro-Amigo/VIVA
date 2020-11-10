import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Botao from '../../components/Botao';
import Fundo from '../../components/Fundo';

import ModalConstrucao from '../modalConstrucao'
import ModalExplicacaoChamadaEmergencia from '../modalExplicacaoChamadaEmergencia';

import FontContext from '../../contexts/styles/styles';

export default function Encaminhamento({ navigation }) {
	const [modalConstrucaoVisible, setModalConstrucaoVisible] = useState(false);
	const [modalExplicacaoVisible, setModalExplicacaoVisible] = useState(false);

	const StylesFontContext = useContext(FontContext);

	return (
		<Fundo>
			<View style={styles.containerTitle}>
				<Text style={styles.title1}>O QUE DESEJA?</Text>
			</View>

			<View style={styles.containerLogin}>
					<Text style={styles.spam}>Seguir para as opções de login como:</Text>
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
						direction={"row"}
						onPress={() => setModalConstrucaoVisible(!modalExplicacaoVisible)}
					/>
					<TouchableOpacity onPress={() => setModalExplicacaoVisible(!modalExplicacaoVisible)}>
						<Text style={styles.txtEmergency}>Clique aqui para saber mais{"\n"}sobre a ligação de emergência</Text>
					</TouchableOpacity>
			</View>

			<ModalConstrucao modalVisible={modalConstrucaoVisible} setModalVisible={setModalConstrucaoVisible}/>
			<ModalExplicacaoChamadaEmergencia modalVisible={modalExplicacaoVisible} setModalVisible={setModalExplicacaoVisible} />
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
	title1: {
		color: "#186794",
		fontSize: wp("6.5%"),
		fontWeight: "bold",
	},
	// Login
	containerLogin: {
		flex: 2,
	},
	spam: {
		color: "#186794",
		fontSize: wp("4.2%"),
		fontWeight: "bold",
		marginBottom: hp("2%"),
		textAlign: "center"
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