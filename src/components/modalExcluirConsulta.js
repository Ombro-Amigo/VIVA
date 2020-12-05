import React from 'react';

import { View, Text, Image, Modal, StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Botao from './Botao/index';

export default function modalExcluirConsultas({
	modalVisible,
	setModalVisible,
	id,
	requestDeleteScheduling,
	user,
	typeUser,
}) {
	return (
		<View>
			<Modal
				animationType='slide'
				transparent
				visible={modalVisible}
				onRequestClose={() => setModalVisible(!modalVisible)}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Image
							style={styles.attentionIcon}
							source={require('../assets/icon/atencao.png')}
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
								underlayColor={"#34C5A244"}
								onPress={() => requestDeleteScheduling(id, user, typeUser)}
							/>
							<Botao
								style={styles.btnSim}
								title='Não'
								corTexto='#FFF'
								styleTexto={styles.titleBtn}
								onPress={() => setModalVisible(!modalVisible)}
							/>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		marginHorizontal: wp('4%'),
		backgroundColor: '#FFF',
		borderRadius: 20,
		paddingVertical: hp('3%'),
		paddingHorizontal: wp('4%'),
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		textAlign: 'left',
	},
	cliqueSair: {
		alignSelf: 'flex-end',
	},
	sairModal: {
		width: 18,
		height: 18,
	},
	attentionIcon: {
		height: 50,
		width: 50,
	},
	title: {
		fontSize: 21,
		fontFamily: 'Signika-Bold',
		textAlign: 'center',
		marginTop: hp('2.5%'),
		marginBottom: hp('5%'),
	},
	areaBtn: {
		flexDirection: 'row',
		width: wp('60%'),
		justifyContent: 'space-around',
	},
	btnSim: {
		paddingHorizontal: wp('5%'),
		paddingVertical: hp('1.5%'),
		borderWidth: 1,
		borderColor: '#34C5A2',
	},
	titleBtn: {
		fontSize: 18,
		fontFamily: 'Signika-Bold',
	},
});
