import React from 'react';

import { FlatList, View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Card from '../Card';
import styles from './style';

export default function ListaConsultas({
	navigation,
	listSchedulings,
	loading,
}) {
	if (loading)
		return <ActivityIndicator style={styles.container} size='large' />;

	if (!listSchedulings)
		return (
			<View style={[styles.container, styles.containerMsg]}>
				<Text style={styles.msgVazia}>
					Você não tem consultas agendadas.
				</Text>
			</View>
		);

	return (
		<FlatList
			style={styles.container}
			data={listSchedulings}
			extraData={listSchedulings}
			renderItem={({ item }) => {
				if (!item.canceled)
					return <Card data={item} navigation={navigation} />;

				return null;
			}}
			keyExtractor={item => item.id}
		/>
	);
}
