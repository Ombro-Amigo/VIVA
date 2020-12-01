import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import Fundo from '../../../../components/Fundo';
import styles from './style';

function MenuAltInfosConta() {
	return (
		<Fundo padding={null}>
			<View style={styles.containerHeader}>
				<Text style={styles.title}>Alterar informações da conta</Text>
			</View>
			<View style={styles.containerInfosUSer}>
				<View style={styles.areaAltFotoUser}>
					<Image
						style={styles.photo}
						source={require('../../../../assets/icon/usuario-cards-e-menu.png')}
					/>
					<TouchableOpacity
						style={styles.containerIconCam}
						onPress={() => {}}
					>
						<Image
							style={styles.iconCam}
							source={require('../../../../assets/icon/camera-foto.png')}
						/>
					</TouchableOpacity>
				</View>
				<Text style={styles.txtNome}>Nome de usuário</Text>
			</View>
			<View style={styles.containerOpcoes}>
				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Alterar o nome de usuário</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Alterar o email da conta</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>
							Visualizar o status do seu CRP
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Alterar sua senha</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={[styles.txtOpcao, { color: 'red' }]}>
							Excluir sua conta
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Fundo>
	);
}

export default MenuAltInfosConta;
