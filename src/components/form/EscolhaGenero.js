import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function EscolhaGenero(props) {
	const { onValueChange, value, error } = props;
	const [genero, setGenero] = useState('');

	return (
		<View>
			<RadioButton.Group onValueChange={onValueChange} value={value}>
				<View style={styles.areaEscolha}>
					<View style={styles.escolha}>
						<RadioButton.Item
							label="Feminino"
							labelStyle={styles.txtOpcoes}
							value="Feminino"
							color="#34C5A2"
							accessibilityLabel="Feminino"
						/>
					</View>
					<View style={styles.escolha}>
						<RadioButton.Item
							label="Masculino"
							labelStyle={styles.txtOpcoes}
							value="Masculino"
							color="#34C5A2"
							accessibilityLabel="Masculino"
						/>
					</View>
					<View style={styles.escolha}>
						<RadioButton.Item
							label="Outro"
							labelStyle={styles.txtOpcoes}
							value="Outro"
							color="#34C5A2"
							accessibilityLabel="Outro"
						/>
					</View>
				</View>
			</RadioButton.Group>

			<View style={styles.areaMsgError}>
				{error && <Text style={styles.msgError}>{error}</Text>}
			</View>

			<TextInput style={{ display: 'none' }} value={genero} />
		</View>
	);
}

const styles = StyleSheet.create({
	areaEscolha: {
		flex: 1,
	},
	escolha: {
		marginHorizontal: wp('1%'),
	},
	txtOpcoes: {
		fontSize: wp('4%'),
		fontWeight: 'bold',
	},
	areaMsgError: {
		alignItems: 'center',
	},
	msgError: {
		color: '#f00',
	},
});
