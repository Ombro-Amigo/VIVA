import React, {useState} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Divider } from 'react-native-paper';
import { Creators as SchedulingActions } from '../store/ducks/scheduling';
import { connect } from 'react-redux';
import Botao from './Botao';
import ModalConstrucao from '../pages/modalConstrucao'


function Card({ data, requestDeleteScheduling, user, typeUser }) {
	const { photo, psicologo, crp, date, start, end, status, id } = data;
	const [modalVisible, setModalVisible] = useState(false)

	return (
		<TouchableWithoutFeedback>
			<>
				<View style={styles.card}>
					<View style={styles.infoUsuario}>
						<View style={{ flexDirection: 'row', alignItems: "center"}}>
							<Image
								style={styles.foto}
								source={require('../assets/icon/usuario-cards-e-menu.png')}
							/>
							<View style={styles.containerCrpNome}>
								<Text style={styles.txt1}>{crp}</Text>
								<Text style={styles.txt1}>{psicologo}</Text>
							</View>
						</View>

						<TouchableOpacity
							style={styles.cliqueExcluir}
							onPress={() => requestDeleteScheduling(id, user, typeUser)}
						>
							<Image
								style={styles.excluirConsulta}
								source={require('../assets/icon/button-fechar.png')}
							/>
						</TouchableOpacity>
					</View>
					<Divider style={styles.divider} />
					<View style={styles.areaInfoConsulta}>
						<View style={styles.line}>
							<View style={styles.group}>
								<Image
									style={styles.icon}
									source={require('../assets/icon/calendario.png')}
								/>
								<Text style={styles.txt2}>{date}</Text>
							</View>
							<View style={styles.group}>
								<Image
									style={styles.icon}
									source={require('../assets/icon/relogio.png')}
								/>
								<Text style={styles.txt2}>
									{start} - {end}
								</Text>
							</View>
						</View>
						<View style={styles.line2}>
							<Botao
								title="Chat"
								corFundo={null}
								onPress={() => setModalVisible(!modalVisible)}
								img={require('../assets/icon/chat.png')}
								imgStyle={[styles.icon, { marginRight: wp('3%') }]}
								style={styles.btnChat}
								highlight
								direction="row-reverse"
								activeOpacity={0.5}
								underlayColor="#34C5A2"
							/>
							<Text style={styles.txt2}>
								Status: <Text style={{ color: 'green' }}>Confirmada</Text>
							</Text>
						</View>
					</View>
				</View>

				<ModalConstrucao modalVisible={modalVisible} setModalVisible={setModalVisible}/>
			</>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#8EDAC8',
		padding: 10,
		borderRadius: 10,
		marginBottom: hp('2%'),
	},
	divider: {
		backgroundColor: '#000',
		alignSelf: 'center',
		width: wp('75%'),
		height: hp('0.3%'),
		marginVertical: hp('1%'),
	},
	infoUsuario: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	foto: {
		width: 60,
		height: 60,
		borderRadius: 100,
	},
	containerCrpNome: {
		height: hp('10%'),
		marginLeft: wp('2%'),
		justifyContent: 'space-between',
	},
	txt1: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	cliqueExcluir: {
		alignSelf: 'flex-start',
	},
	excluirConsulta: {
		width: 18,
		height: 18,
	},
	areaInfoConsulta: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	line: {
		flexDirection: 'row',
		width: wp('80%'),
		marginVertical: hp('1%'),
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line2: {
		flexDirection: 'row',
		width: wp('80%'),
		marginVertical: hp('1%'),
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	group: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: "center",
	},
	icon: {
		width: 20,
		height: 20,
	},
	txt2: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: wp('2%'),
	},
	btnChat: {
		paddingVertical: hp('0.8%'),
		paddingHorizontal: wp('4%'),
		borderRadius: 15,
		borderWidth: wp('0.8%'),
		borderColor: '#565656',
		justifyContent: 'space-around',
	},
});

const mapStateToProps = state => ({
	user: state.authSignIn.user,
	typeUser: state.authSignIn.typeUser,
});

const mapDispatchToProps = dispatch => ({
	requestDeleteScheduling: (idScheduling, user, typeUser) => dispatch(SchedulingActions.requestDeleteScheduling(idScheduling, user, typeUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
