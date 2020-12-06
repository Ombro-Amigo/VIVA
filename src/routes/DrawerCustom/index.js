import React, { useState } from 'react';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Botao from '../../components/Botao';
import MenuItem from '../../components/ItemMenu';
import ModalConstrucao from '../../components/modalConstrucao';
import ModalExplicacaoChamadaEmergencia from '../../components/modalExplicacaoChamadaEmergencia';
import { Creators as AuthSignInActions } from '../../store/ducks/authSignIn';
import styles from './style';

function DrawerCustom(props) {
	const { name, lastName, requestSignOut, navigation } = props;

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
								source={require('../../assets/icon/usuario-cards-e-menu.png')}
							/>
							<View
								style={[
									styles.onlineOffline,
									{ backgroundColor: 'green' },
								]}
							/>
						</View>

						<View>
							<Text style={styles.txtNome}>{`${name} ${lastName}`}</Text>
						</View>
					</View>

					<View style={styles.menuSection}>
						<MenuItem
							title='Página inicial'
							titleStyle={styles.txtMenu}
							icon={require('../../assets/icon/home.png')}
							iconStyle={styles.icon}
							styleContainer={styles.containerItem}
							styleItem={styles.itemMenu}
							underlayColor='#DCD2D277'
							onPress={() => {
								navigation.navigate('Home');
							}}
						/>

						<MenuItem
							title='Alterar informações da conta'
							titleStyle={styles.txtMenu}
							icon={require('../../assets/icon/editar-infos-conta.png')}
							iconStyle={styles.icon}
							styleContainer={styles.containerItem}
							styleItem={styles.itemMenu}
							underlayColor='#DCD2D277'
							onPress={() => {
								navigation.navigate('Alterar informações da conta');
							}}
						/>

						<MenuItem
							title='Configurações do aplicativo'
							titleStyle={styles.txtMenu}
							icon={require('../../assets/icon/configuracoes.png')}
							iconStyle={styles.icon}
							styleContainer={styles.containerItem}
							styleItem={styles.itemMenu}
							underlayColor='#DCD2D277'
							onPress={() => {
								navigation.navigate('Configurações do aplicativo');
							}}
						/>

						<MenuItem
							title='Saiba mais sobre nós'
							titleStyle={styles.txtMenu}
							icon={require('../../assets/icon/saiba-mais.png')}
							iconStyle={styles.icon}
							styleContainer={styles.containerItem}
							styleItem={styles.itemMenu}
							underlayColor='#DCD2D277'
							onPress={() => {
								navigation.navigate('Saiba mais sobre nós');
							}}
						/>
					</View>

					<View style={styles.containerEmergency}>
						<Botao
							title='Ligar para a Emergência'
							style={styles.buttonEmergency}
							corFundo='#D4CA03'
							corTexto='#000'
							styleTexto={styles.txtBtnEmergencia}
							imgStyle={styles.iconEmergency}
							img={require('../../assets/icon/telefone-chamada-emergencia.png')}
							direction='row'
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
					title='Sair'
					titleStyle={styles.txtSair}
					icon={require('../../assets/icon/sair.png')}
					iconStyle={styles.icon}
					styleContainer={styles.containerItem}
					styleItem={[styles.itemMenu, { flexDirection: 'row-reverse' }]}
					underlayColor='#DCD2D277'
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

const mapStateToProps = state => ({
	name: state.authSignIn.user.name,
	lastName: state.authSignIn.user.lastName,
});

const mapDispatchToProps = dispatch => ({
	requestSignOut: () => dispatch(AuthSignInActions.requestSignOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerCustom);
