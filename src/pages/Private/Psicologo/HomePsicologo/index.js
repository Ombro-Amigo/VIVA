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
import { Creators as schedulingsActions } from '../../../../store/ducks/scheduling';
import styles from './style';

function HomePsicologo({
	listSchedulings,
	uid,
	loading,
	getSchedulingsPsychologist,
	navigation,
}) {
	const [modalStatusVisible, setModalStatusVisible] = useState(false);
	const [modalRangeVisible, setModalRangeVisible] = useState(false);

	const { dispo } = useContext(StatesContext);
	const { rangeConsultas } = useContext(StatesContext);

	useEffect(() => {
		getSchedulingsPsychologist(uid, 'psicologo');
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
					listSchedulings={listSchedulings}
					loading={loading}
					navigation={navigation}
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
	listSchedulings: state.scheduling.listSchedulings,
	loading: state.scheduling.loading,
});

const mapDsipatchToProps = dispatch => ({
	getSchedulingsPsychologist: (uid, typeUser) =>
		dispatch(schedulingsActions.getSchedulingsPsychologist(uid, typeUser)),
});

export default connect(mapStateToProps, mapDsipatchToProps)(HomePsicologo);
