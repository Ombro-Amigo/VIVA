import React, { useState } from 'react';

import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './style';

export default function EscolhaGenero(props) {
	const { onValueChange, value, error } = props;
	const [showError, setShowError] = useState(false);
	// const [genero, setGenero] = useState('');

	return (
		<View>
			<RadioButton.Group
				onValueChange={onValueChange}
				value={value}
				onFocus={() => setShowError(true)}
				onBlur={() => (!error ? setShowError(false) : setShowError(true))}
			>
				<View style={styles.areaEscolha}>
					<View style={styles.escolha}>
						<RadioButton.Item
							label='Feminino'
							labelStyle={styles.txtOpcoes}
							value='Feminino'
							color='#34C5A2'
							accessibilityLabel='Feminino'
						/>
					</View>
					<View style={styles.escolha}>
						<RadioButton.Item
							label='Masculino'
							labelStyle={styles.txtOpcoes}
							value='Masculino'
							color='#34C5A2'
							accessibilityLabel='Masculino'
						/>
					</View>
					<View style={styles.escolha}>
						<RadioButton.Item
							label='Outro'
							labelStyle={styles.txtOpcoes}
							value='Outro'
							color='#34C5A2'
							accessibilityLabel='Outro'
						/>
					</View>
				</View>
			</RadioButton.Group>

			<View style={styles.areaMsgError}>
				{showError && <Text style={styles.msgError}>{error}</Text>}
			</View>
		</View>
	);
}
