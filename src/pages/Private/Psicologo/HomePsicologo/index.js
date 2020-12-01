import React, { useContext, useEffect, useState } from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

import Fundo from '../../../../components/Fundo';
import ListaConsultas from '../../../../components/ListaConsultas';
import MensagemStatus from '../../../../components/MensagemStatus';
import ModalPeriodoConsultas from '../../../../components/modalPeriodoConsultas';
import ModalStatus from '../../../../components/modalStatus';
import PeriodoConsultas from '../../../../components/PeriodoConsultas';
import StatesContext from '../../../../contexts/states';
import { Creators as appointmentActions } from '../../../../store/ducks/appointment';
import styles from './style';

function HomePsicologo({
	listAppointments,
	uid,
	loading,
	requestAppointments,
}) {
	const [modalStatusVisible, setModalStatusVisible] = useState(false);
	const [modalRangeVisible, setModalRangeVisible] = useState(false);

	const { dispo } = useContext(StatesContext);
	const { rangeConsultas } = useContext(StatesContext);

	//  console.log(rangeConsultas)

	useEffect(() => {
		requestAppointments(uid, 'psicologo');
	}, []);

	return (
		<Fundo>
			<View style={styles.container}>
				<View style={styles.areaStatus}>
					<Text style={styles.txtStatus}>Seu status: </Text>
					<TouchableOpacity
						onPress={() => setModalStatusVisible(!modalStatusVisible)}
					>
						<MensagemStatus dispo={dispo} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.areaListaConsultas}>
				<Text style={styles.title}>Consultas Agendadas</Text>

				<TouchableOpacity
					onPress={() => setModalRangeVisible(!modalRangeVisible)}
				>
					<View style={styles.periodoConsultas}>
						<PeriodoConsultas rangeConsultas={rangeConsultas} />
					</View>
				</TouchableOpacity>

				<ListaConsultas
					style={styles.listaConsultas}
					listAppointments={listAppointments}
					loading={loading}
				/>
			</View>

			<ModalStatus
				modalVisible={modalStatusVisible}
				setModalVisible={setModalStatusVisible}
			/>
			<ModalPeriodoConsultas
				modalVisible={modalRangeVisible}
				setModalVisible={setModalRangeVisible}
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

export default connect(mapStateToProps, mapDsipatchToProps)(HomePsicologo);
