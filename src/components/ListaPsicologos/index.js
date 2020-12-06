import React from 'react';

import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import styles from './style';

const ListaPsicologo = ({ listPisco, value, onValueChange, error }) => {
	if (!listPisco)
		return (
			<View style={[styles.container, styles.containerMsg]}>
				<Text style={styles.msgVazia}>
					Desculpe, no momento não temos psicólogos disponíveis em nosso
					sistema :(
				</Text>
			</View>
		);
	return (
		<View>
			<FlatList
				style={styles.container}
				data={listPisco}
				renderItem={({ item }) => (
					<View
						style={{
							flex: 1,
							backgroundColor: '#77DCC3',
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: 10,
							borderRadius: 10,
							marginBottom: 10,
							border: 'solid',
							borderColor: 'green',
							borderWidth: value.crp === item.crp ? 2.5 : 0,
						}}
						onTouchStart={() => {
							onValueChange(item);
						}}
					>
						<View style={styles.infosPsicologo}>
							<Image
								style={styles.fotoPsicologo}
								source={require('../../assets/icon/usuario-cards-e-menu.png')}
							/>
							<View style={styles.containerCrpNome}>
								<Text style={styles.txt1}>CRP: {item.crp}</Text>
								<Text style={styles.txt1}>{item.name}</Text>
							</View>
						</View>
						<TouchableOpacity>
							<Image
								style={styles.tresPontos}
								source={require('../../assets/icon/mais-opcoes.png')}
							/>
						</TouchableOpacity>
					</View>
				)}
				keyExtractor={item => item.id}
			/>

			<View style={styles.areaMsgError}>
				{error && <Text style={styles.msgError}>{error}</Text>}
			</View>
		</View>
	);
};

export default ListaPsicologo;
