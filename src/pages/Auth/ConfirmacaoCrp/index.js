import React, { useState, useContext } from 'react';

import { View, Text, ScrollView } from 'react-native';

import Botao from '../../../components/Botao';
import Fundo from '../../../components/Fundo';
import RespostaValidacaoCrp from '../../../components/RespostaValidacaoCrp';
import StatesContext from '../../../contexts/states';
import styles from './style';

function ConfirmacaoCrp({ navigation }) {
	const [validationComplete] = useState(false);
	const { validated } = useContext(StatesContext);

	return (
		<ScrollView style={styles.container}>
			<Fundo>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Quase lá</Text>
				</View>

				<View style={styles.subTitleContainer}>
					<Text style={styles.subTitle}>
						Agora precisamos que aguarde enquanto o processo de validação
						do seu CRP é efetuado.
					</Text>
				</View>

				<View style={styles.areaSituacaoCrp}>
					<Text style={styles.exibeCrp}>Seu CRP: XX/XXXXXX</Text>
					<Text style={styles.exibeSituacaoValidacao}>
						Situação da validação:
						<Text
							style={{ color: !validationComplete ? '#FF7A00' : '#FFF' }}
						>
							{!validationComplete ? ' Em andamento' : ' Concluída'}
						</Text>
					</Text>
				</View>

				<View style={styles.containerMensagem}>
					{validationComplete ? (
						<RespostaValidacaoCrp
							validate={validated}
							validationComplete={validationComplete}
						/>
					) : (
						<Text style={styles.txtAguarde}>
							Aguarde o processo de validação
						</Text>
					)}
				</View>

				<Botao
					corFundo={validationComplete ? '#34C5A2' : '#C3C3C3'}
					style={styles.btn}
					title={validated ? 'Concluir' : 'Voltar para a tela inicial'}
					desabilitado={!validated}
					onPress={() => navigation.navigate('LoginPsicologo')}
				/>
			</Fundo>
		</ScrollView>
	);
}

export default ConfirmacaoCrp;
