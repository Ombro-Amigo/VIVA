import React from 'react';

import { View, Text } from 'react-native';

import Botao from '../../../../components/Botao';
import Fundo from '../../../../components/Fundo';
import styles from './style';

function PrimeiroContato() {
	return (
		<Fundo>
			<View styles={styles.boasVindas}>
				<Text style={styles.mensagemBoasVindas}>Seja bem-vindo</Text>
			</View>
			<View style={styles.explicacao}>
				<Text style={styles.mensagemExplicacao}>
					Como esta é a sua primeira vez aqui, precisamos colher algumas
					informações importantes para seus futuros atendimentos em nosso
					aplicativo. Clique no botão para seguir para a triagem.
				</Text>
			</View>
			<Botao title='Seguir para a triagem' style={styles.btn} />
		</Fundo>
	);
}

export default PrimeiroContato;
