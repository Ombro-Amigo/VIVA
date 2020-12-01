import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import Fundo from '../../../../components/Fundo';
import styles from './style';

function MenuSaibaMais() {
	return (
		<Fundo padding={null}>
			<View style={styles.containerHeader}>
				<Text style={styles.title}>Saiba mais sobre nós</Text>
			</View>

			<View style={styles.containerOpcoes}>
				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Políticas de privacidade</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Termos de uso</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.opcao}>
					<TouchableOpacity onPress={() => {}}>
						<Text style={styles.txtOpcao}>Equipe Ombro Amigo</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Fundo>
	);
}

export default MenuSaibaMais;
