import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import Fundo from '../../../../components/Fundo';
import styles from './style';

function MenuConfigAplicativo() {
	return (
		<Fundo padding={null}>
			<View style={styles.containerHeader}>
				<Text style={styles.title}>Configurações do Aplicativo</Text>
			</View>

			<View style={styles.containerOpcoes}>
				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Notificações</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Histórico de ligações</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Fundo>
	);
}

export default MenuConfigAplicativo;
