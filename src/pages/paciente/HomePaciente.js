import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { connect, useSelector } from 'react-redux';
import ListaConsultas from '../../components/ListaConsultas';
import Fundo from '../../components/Fundo';
import Botao from '../../components/Botao';
import { Creators as appointmentActions } from '../../store/ducks/appointment';

import ModalConstrucao from '../modalConstrucao';

function HomePaciente({
	navigation,
	listAppointments,
	uid,
	loading,
	requestAppointments,
}) {
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		requestAppointments(uid, 'paciente');
	}, []);

	return (
		<Fundo>
			<View style={styles.areaConsultas}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Consultas Agendadas</Text>
				</View>
				<ListaConsultas
					listAppointments={listAppointments}
					loading={loading}
				/>
			</View>
			<View style={styles.agendarConsulta}>
				<Botao
					style={styles.buttonAgendarConsul}
					title="AGENDAR UMA NOVA CONSULTA"
					onPress={() => navigation.navigate('Agendamento1')}
				/>
			</View>
			<View style={styles.areaAnuncio}>
				<Botao
					style={styles.buttonAssistirAnuncio}
					title="ASSISTIR UM ANÚNCIO"
					onPress={() => setModalVisible(!modalVisible)}
				/>
				<View style={styles.areaPontos}>
					<Image
						style={styles.logoPontos}
						source={require('../../assets/icon/logo_header.png')}
					/>
					<Text style={styles.txtPontos}>000</Text>
				</View>
			</View>

			<ModalConstrucao
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</Fundo>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#6EB4E7',
		padding: 15,
	},
	titleContainer: {
		marginBottom: hp('1.5%'),
	},
	title: {
		color: '#FFF',
		fontFamily: "Signika-Bold",
		fontSize: 20,
	},
	areaConsultas: {
		flex: 1,
	},
	buttonAgendarConsul: {
		backgroundColor: '#80C6F9',
		alignItems: 'center',
		marginTop: hp('3%'),
		paddingVertical: 20,
	},
	areaAnuncio: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: hp("3%"),
	},
	buttonAssistirAnuncio: {
		backgroundColor: '#34C5A2',
		alignItems: 'center',
		// marginTop: hp('2.5%'),
		paddingVertical: hp('2.5%'),
		paddingHorizontal: wp('5%'),
		borderRadius: 15,
	},
	txtPontos: {
		fontSize: 22,
	},
	areaPontos: {
		borderColor: '#FFF',
		// marginTop: 15,
		padding: 5,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		borderStyle: 'solid',
		borderWidth: 3,
		borderRadius: 15,
	},
	logoPontos: {
		width: 45,
		height: 45,
	},

});

const mapStateToProps = state => ({
	uid: state.authSignIn.user.uid,
	listAppointments: state.appointment.listAppointments,
	loading: state.appointment.loading,
});

const mapDsipatchToProps = dispatch => ({
	requestAppointments: (uid, typeUser) =>
		dispatch(appointmentActions.requestAppointments(uid, typeUser)),
});

export default connect(mapStateToProps, mapDsipatchToProps)(HomePaciente);
