import React, { useState } from 'react';

import {
	View,
	Text,
	TouchableOpacity,
	Image,
	TouchableHighlight,
} from 'react-native';
import { Divider } from 'react-native-paper';
import { connect } from 'react-redux';

import { Creators as SchedulingActions } from '../../store/ducks/scheduling';
import Botao from '../Botao';
import ModalConstrucao from '../modalConstrucao';
import ModalExcluirConsulta from '../modalExcluirConsulta';
import styles from './style';

function Card({ data, requestConfirmScheduling, typeUser, navigation }) {
	// console.log('data flatlist: ', data);
	const {
		paciNome,
		psicoNome,
		psicoCrp,
		date,
		start,
		end,
		status,
		id,
		chat,
	} = data;
	const [modalConstructionVisible, setModalConstructionVisible] = useState(
		false
	);
	const [
		modalCancelAppointmentVisible,
		setCancelAppointmentVisible,
	] = useState(false);

	return (
		<TouchableHighlight>
			<>
				<View style={styles.card}>
					<View style={styles.btnControlCard}>
						<TouchableOpacity
							onPress={() =>
								setCancelAppointmentVisible(
									!modalCancelAppointmentVisible
								)
							}
						>
							<Image
								style={styles.btnControl}
								source={require('../../assets/icon/button-fechar.png')}
							/>
						</TouchableOpacity>
						{typeUser === 'psicologo' && status === 'Pendente' && (
							<TouchableOpacity
								onPress={() => requestConfirmScheduling(id)}
							>
								<Image
									style={[styles.btnControl, styles.btnControlCheck]}
									source={require('../../assets/icon/button-check.png')}
								/>
							</TouchableOpacity>
						)}
					</View>
					<View>
						<View style={styles.infoUsuario}>
							<View
								style={{ flexDirection: 'row', alignItems: 'center' }}
							>
								<Image
									style={styles.foto}
									source={require('../../assets/icon/usuario-cards-e-menu.png')}
								/>
								<View
									style={[
										styles.containerCrpNome,
										psicoCrp
											? { justifyContent: 'space-between' }
											: { justifyContent: 'flex-end' },
									]}
								>
									{psicoCrp && (
										<Text style={[styles.txt1, styles.txtCrp]}>
											CRP: {psicoCrp}
										</Text>
									)}
									<Text style={[styles.txt1, styles.txtNome]}>
										{paciNome || psicoNome}
									</Text>
								</View>
							</View>
						</View>
					</View>

					<Divider style={styles.divider} />

					<View>
						<Text style={styles.txtTitleInfo}>
							Informações da Consulta
						</Text>
						<View style={styles.areaInfoConsulta}>
							<View style={styles.line}>
								<View style={styles.group}>
									<Image
										style={styles.icon}
										source={require('../../assets/icon/calendario.png')}
									/>
									<Text style={styles.txt2}>{date}</Text>
								</View>
								<View style={styles.group}>
									<Image
										style={styles.icon}
										source={require('../../assets/icon/relogio.png')}
									/>
									<Text style={styles.txt2}>
										{start} - {end}
									</Text>
								</View>
							</View>
							<View style={styles.line2}>
								<Botao
									title='Chat'
									corFundo={null}
									onPress={() =>
										navigation.navigate('Chat', { id, chat })
									}
									img={require('../../assets/icon/chat.png')}
									imgStyle={styles.icon}
									style={styles.btnChat}
									highlight
									direction='row-reverse'
									activeOpacity={0.5}
									underlayColor='#34C5A2'
								/>
								<Text style={styles.txt2}>
									Status:{' '}
									<Text
										style={{
											color:
												status === 'Confirmada'
													? 'green'
													: status === 'Pendente'
													? 'yellow'
													: 'red',
										}}
									>
										{status}
									</Text>
								</Text>
							</View>
						</View>
						<View style={styles.line2}>
							<Botao
								title='Chat'
								corFundo={null}
								onPress={() =>
									navigation.navigate('Chat', { id, chat })
								}
								img={require('../../assets/icon/chat.png')}
								imgStyle={styles.icon}
								style={styles.btnChat}
								highlight
								direction='row-reverse'
								activeOpacity={0.5}
								underlayColor='#34C5A2'
							/>
							<Text style={styles.txt2}>
								Status:{' '}
								<Text
									style={{
										color:
											status === 'Confirmada'
												? 'green'
												: status === 'Pendente'
												? 'yellow'
												: 'red',
									}}
								>
									{status}
								</Text>
							</Text>
						</View>
					</View>
				</View>

				<ModalConstrucao
					modalVisible={modalConstructionVisible}
					setModalVisible={setModalConstructionVisible}
				/>

				<ModalExcluirConsulta
					modalVisible={modalCancelAppointmentVisible}
					setModalVisible={setCancelAppointmentVisible}
					id={id}
				/>
			</>
		</TouchableHighlight>
	);
}

const mapStateToProps = state => ({
	user: state.authSignIn.user,
	typeUser: state.authSignIn.typeUser,
});

const mapDispatchToProps = dispatch => ({
	requestConfirmScheduling: idScheduling =>
		dispatch(SchedulingActions.requestConfirmScheduling(idScheduling)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
