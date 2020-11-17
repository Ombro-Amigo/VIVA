import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import Botao from '../components/Botao';
import MenuItem from '../components/ItemMenu';
import ModalConstrucao from '../pages/modalConstrucao';
import ModalExplicacaoChamadaEmergencia from '../pages/modalExplicacaoChamadaEmergencia';
import { Creators as AuthSignInActions } from '../store/ducks/authSignIn';

function DrawerCustom(props) {
	const { requestSignOut, navigation } = props;

	const [modalConstrucaoVisible, setModalConstrucaoVisible] = useState(false);
	const [modalExplicacaoVisible, setModalExplicacaoVisible] = useState(false);

	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.infoUsuario}>
						<View
							style={{ flexDirection: 'row', alignItems: 'flex-end' }}
						>
							<Image
								style={styles.photo}
								source={require('../assets/icon/usuario-cards-e-menu.png')}
							/>
							<View
								style={[
									styles.onlineOffline,
									{ backgroundColor: 'green' },
								]}
							/>
						</View>

						<View>
							<Text style={styles.txtNome}>Nome de usuário</Text>
						</View>
					</View>

					<View style={styles.menuSection}>
						<MenuItem
							title="Alterar informações da conta"
							titleStyle={styles.txtMenu}
							icon={require('../assets/icon/editar-infos-conta.png')}
							iconStyle={styles.icon}
							styleContainer={styles.containerItem}
							styleItem={styles.itemMenu}
							underlayColor="#DCD2D277"
							onPress={() => {navigation.navigate('Alterar informações da conta')}}
						/>

						<MenuItem
							title="Configurações do aplicativo"
							titleStyle={styles.txtMenu}
							icon={require('../assets/icon/configuracoes.png')}
							iconStyle={styles.icon}
							styleContainer={styles.containerItem}
							styleItem={styles.itemMenu}
							underlayColor="#DCD2D277"
							onPress={() => {navigation.navigate('Configurações do aplicativo')}}
						/>

						<MenuItem
							title="Saiba mais sobre nós"
							titleStyle={styles.txtMenu}
							icon={require('../assets/icon/saiba-mais.png')}
							iconStyle={styles.icon}
							styleContainer={styles.containerItem}
							styleItem={styles.itemMenu}
							underlayColor="#DCD2D277"
							onPress={() => {navigation.navigate('Saiba mais sobre nós')}}
						/>
					</View>

					<View style={styles.containerEmergency}>
						<Botao
							title="Ligar para a Emergência"
							style={styles.buttonEmergency}
							corFundo="#D4CA03"
							corTexto="#000"
							styleTexto={styles.txtBtnEmergencia}
							imgStyle={styles.iconEmergency}
							img={require('../assets/icon/icon_phone_emergency.png')}
							direction="row"
							onPress={() =>
								setModalConstrucaoVisible(!modalExplicacaoVisible)
							}
						/>
						<TouchableOpacity
							onPress={() =>
								setModalExplicacaoVisible(!modalExplicacaoVisible)
							}
						>
							<Text style={styles.txtEmergency}>
								Clique aqui para saber mais{'\n'}sobre a ligação de
								emergência
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</DrawerContentScrollView>
			<View style={styles.bottomDrawerSection}>
				<MenuItem
					title="Sair"
					titleStyle={styles.txtSair}
					icon={require('../assets/icon/sair.png')}
					iconStyle={styles.icon}
					styleContainer={styles.containerItem}
					styleItem={[styles.itemMenu, { flexDirection: 'row-reverse' }]}
					underlayColor="#DCD2D277"
					onPress={() => requestSignOut()}
				/>
			</View>

			<ModalConstrucao
				modalVisible={modalConstrucaoVisible}
				setModalVisible={setModalConstrucaoVisible}
			/>
			<ModalExplicacaoChamadaEmergencia
				modalVisible={modalExplicacaoVisible}
				setModalVisible={setModalExplicacaoVisible}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#80C6F9',
	},
	drawerContent: {
		flex: 1,
	},
	infoUsuario: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		borderBottomWidth: 1,
		borderColor: '#FFF',
		padding: wp('2%'),
	},
	photo: {
		width: 70,
		height: 70,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#000',
	},
	onlineOffline: {
		width: 20,
		height: 20,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#80C6F9',
		position: 'absolute',
		right: 0,
	},
	txtNome: {
		color: '#186794',
		fontSize: wp('4.5%'),
		fontWeight: 'bold',
		marginLeft: wp('2%'),
	},
	menuSection: {
		marginTop: hp('3%'),
		borderBottomWidth: 1,
		borderColor: '#FFF',
	},
	containerItem: {
		marginVertical: hp('0.5%'),
		marginHorizontal: wp('1.5%'),
		borderRadius: 10,
	},
	itemMenu: {
		padding: wp('1%'),
		margin: wp('2%'),
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		width: 20,
		height: 20,
	},
	txtMenu: {
		color: '#FFF',
		fontSize: wp('4.5%'),
		fontWeight: 'bold',
		marginLeft: wp('3%'),
	},
	bottomDrawerSection: {
		borderTopWidth: 1,
		borderTopColor: '#FFF',
	},
	txtSair: {
		color: '#186794',
		fontSize: wp('4.5%'),
		fontWeight: 'bold',
		marginRight: wp('3%'),
	},
	containerEmergency: {
		flex: 3,
		marginTop: hp('2%'),
		alignItems: 'center',
	},
	buttonEmergency: {
		paddingVertical: hp('1.5%'),
		paddingHorizontal: wp('5%'),
	},
	txtBtnEmergencia: {
		fontSize: wp("4%"),
	},
	iconEmergency: {
		width: 25,
		height: 25,
		marginLeft: wp('5%'),
		aspectRatio: 1,
	},
	txtEmergency: {
		marginTop: hp('2%'),
		color: '#fff',
		fontWeight: 'bold',
		fontSize: wp('3.3%'),
		textAlign: 'center',
	},
});

const mapDispatchToProps = dispatch => ({
	requestSignOut: () => dispatch(AuthSignInActions.requestSignOut()),
});

export default connect(null, mapDispatchToProps)(DrawerCustom);
