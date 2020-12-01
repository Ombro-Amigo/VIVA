import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Botao from '../../../../components/Botao';
import Fundo from '../../../../components/Fundo';
import ModalConstrucao from '../../../../components/modalConstrucao';
import ModalExplicacaoChamadaEmergencia from '../../../../components/modalExplicacaoChamadaEmergencia';
import styles from './style';

// import FontContext from '../../contexts/styles/styles';

function Encaminhamento({ navigation }) {
	const [modalConstrucaoVisible, setModalConstrucaoVisible] = useState(false);
	const [modalExplicacaoVisible, setModalExplicacaoVisible] = useState(false);

	// const StylesFontContext = useContext(FontContext);

	return (
		<Fundo>
			<View style={styles.containerTitle}>
				<Text style={styles.title1}>O QUE DESEJA?</Text>
			</View>

			<View style={styles.containerLogin}>
				<Text style={styles.spam}>
					Seguir para as opções de login como:
				</Text>
				<View style={styles.containerButtonLogin}>
					<Botao
						title='Paciente'
						style={styles.buttonLogin}
						onPress={() => navigation.navigate('LoginPaciente')}
					/>
					<Botao
						title='Psicólogo'
						style={styles.buttonLogin}
						onPress={() => navigation.navigate('LoginPsicologo')}
					/>
				</View>
			</View>

			<View style={styles.containerEmergency}>
				<Botao
					title='Ligar para a Emergência'
					style={styles.buttonEmergency}
					corFundo='#D4CA03'
					corTexto='#000'
					imgStyle={styles.iconEmergency}
					img={require('../../../../assets/icon/icon_phone_emergency.png')}
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
						Clique aqui para saber mais{'\n'}sobre a ligação de emergência
					</Text>
				</TouchableOpacity>
			</View>

			<ModalConstrucao
				modalVisible={modalConstrucaoVisible}
				setModalVisible={setModalConstrucaoVisible}
			/>
			<ModalExplicacaoChamadaEmergencia
				modalVisible={modalExplicacaoVisible}
				setModalVisible={setModalExplicacaoVisible}
			/>
		</Fundo>
	);
}

export default Encaminhamento;
