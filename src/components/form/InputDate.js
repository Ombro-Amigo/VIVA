import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, TextInput, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { styles } from './styles';

function InputDate({ error, value, onChange }) {
	const [, setDate] = useState('');
	const [show, setShow] = useState(false);

	return (
		<View>
			<TouchableWithoutFeedback onPress={() => setShow(true)}>
				<View>
					<View style={styles.container}>
						<View style={styles.areaObrigatorio}>
							<Text style={styles.obrigatorio}>*</Text>
						</View>

						<TextInput
							style={[styles.input]}
							placeholder="Data de nascimento"
							value={value}
							editable={false}
						/>
					</View>

					<View style={styles.areaConfirmacaoSenha}>
						{error && <Text style={styles.senhaErrada}>{error}</Text>}
					</View>
				</View>
			</TouchableWithoutFeedback>

			<DateTimePicker
				date={
					value !== '' ? moment(value, 'DD/MM/YYYY').toDate() : new Date()
				}
				isVisible={show}
				mode="date"
				onConfirm={pickedDate => {
					setShow(false);
					onChange(moment(pickedDate).format('DD/MM/YYYY'));
					setDate(moment(pickedDate).format('DD/MM/YYYY'));
				}}
				onCancel={() => {
					setShow(false);
				}}
				maximumDate={new Date()}
			/>
		</View>
	);
}

export default InputDate;
