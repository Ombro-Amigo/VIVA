import React, { useState, useEffect } from 'react';

import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import Botao from '../../../../components/Botao';
import Fundo from '../../../../components/Fundo';
import ListaConsultas from '../../../../components/ListaConsultas';
import ModalConstrucao from '../../../../components/modalConstrucao';
import { Creators as schedulingsActions } from '../../../../store/ducks/scheduling';
import styles from './style';

function HomePaciente({
	navigation,
	listSchedulings,
	uid,
	loading,
	requestSchedulingsPatient,
}) {
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		requestSchedulingsPatient(uid, 'paciente');
	}, []);

	return (
		<Fundo>
			<View style={styles.areaConsultas}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Consultas Agendadas</Text>
				</View>
				<ListaConsultas
					listSchedulings={listSchedulings}
					loading={loading}
					navigation={navigation}
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
	listSchedulings: state.scheduling.listSchedulings,
	loading: state.scheduling.loading,
});

const mapDsipatchToProps = dispatch => ({
	requestSchedulingsPatient: (uid, typeUser) =>
		dispatch(schedulingsActions.requestSchedulingsPatient(uid, typeUser)),
});

export default connect(mapStateToProps, mapDsipatchToProps)(HomePaciente);
