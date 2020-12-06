import React from 'react';

import { View, Text, Image, Modal } from 'react-native';
import { connect } from 'react-redux';

import { Creators as SchedulingActions } from '../../store/ducks/scheduling';
import Botao from '../Botao/index';
import styles from './style';

function modalExcluirConsultas({
	modalVisible,
	setModalVisible,
	id,
	requestCancelScheduling,
}) {
	return (
		<View>
			<Modal
				animationType='slide'
				transparent
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Image
							style={styles.attentionIcon}
							source={require('../../assets/icon/atencao.png')}
						/>
						<Text style={styles.title}>
							Deseja realmente {'\n'}cancelar a consulta?
						</Text>
						<View style={styles.areaBtn}>
							<Botao
								style={styles.btnSim}
								title='Sim'
								highlight
								corFundo={null}
								corTexto='#34C5A2'
								styleTexto={styles.titleBtn}
								activeOpacity={0.9}
								underlayColor='#34C5A244'
								onPress={() => requestCancelScheduling(id)}
							/>
							<Botao
								style={styles.btnSim}
								title='Não'
								corTexto='#FFF'
								styleTexto={styles.titleBtn}
								onPress={() => setModalVisible(false)}
							/>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const mapDispatchToProps = dispatch => ({
	requestCancelScheduling: idScheduling =>
		dispatch(SchedulingActions.requestCancelScheduling(idScheduling)),
});

export default connect(null, mapDispatchToProps)(modalExcluirConsultas);
