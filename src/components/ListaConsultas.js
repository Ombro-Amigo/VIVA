import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ActivityIndicator } from 'react-native-paper';
import Card from './Card';
import consultasPaciente from '../utils/consultasPaciente.json';
import consultasPsicologo from '../utils/consultasPsicologo.json';

export default function ListaConsultas(props) {
	const { listAppointments, loading } = props;

	// console.log('list: ', listAppointments.length);

	if (loading)
		return <ActivityIndicator style={styles.container} size="large" />;

	if(!listAppointments)
		return (
			<View style={[styles.container, styles.containerMsg]}>
				<Text style={styles.msgVazia}>Você não tem consultas agendadas.</Text>
			</View>
		)

	return (
		<FlatList
			style={styles.container}
			data={listAppointments}
			renderItem={({ item }) => (
				<Card
					data={item}
				/>
			)}
			keyExtractor={item => item.id}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		height: hp('52%'),
		borderRadius: 10,
		borderStyle: 'solid',
		paddingHorizontal: wp('4%'),
		paddingVertical: hp('1%'),
	},
	containerMsg: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	msgVazia: {
		color: '#186794',
		fontWeight: 'bold',
		fontSize: hp('3%'),
	}
});
