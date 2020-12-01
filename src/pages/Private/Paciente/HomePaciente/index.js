import React, { useState, useEffect } from 'react';

import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import Botao from '../../../../components/Botao';
import Fundo from '../../../../components/Fundo';
import ListaConsultas from '../../../../components/ListaConsultas';
import ModalConstrucao from '../../../../components/modalConstrucao';
import { Creators as appointmentActions } from '../../../../store/ducks/appointment';
import styles from './style';

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
					title='AGENDAR UMA NOVA CONSULTA'
					onPress={() => navigation.navigate('Agendamento1')}
				/>
			</View>
			<View style={styles.areaAnuncio}>
				<Botao
					style={styles.buttonAssistirAnuncio}
					title='ASSISTIR UM ANÚNCIO'
					onPress={() => setModalVisible(!modalVisible)}
				/>
				<View style={styles.areaPontos}>
					<Image
						style={styles.logoPontos}
						source={require('../../../../assets/icon/logo_header.png')}
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
