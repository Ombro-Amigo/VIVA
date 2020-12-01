import React, { useState } from 'react';

import {
	View,
	FlatList,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ListaPsicologo = ({ listPisco, value, onValueChange, error }) => {
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
								source={require('../assets/icon/usuario-cards-e-menu.png')}
							/>
							<Text style={styles.nomePsicologo}>{item.name}</Text>
						</View>
						<TouchableOpacity>
							<Image
								style={styles.tresPontos}
								source={require('../assets/icon/mais-opcoes.png')}
							/>
						</TouchableOpacity>
					</View>
				)}
				keyExtractor={item => item.crp}
			/>

			<View style={styles.areaMsgError}>
				{error && <Text style={styles.msgError}>{error}</Text>}
			</View>
		</View>
	);
};

export default ListaPsicologo;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		marginTop: hp('2.5%'),
		height: hp('32%'),
		borderRadius: 10,
		paddingHorizontal: wp('2.5%'),
		paddingVertical: hp('1%'),
	},
	infosPsicologo: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	fotoPsicologo: {
		width: 60,
		height: 60,
		borderRadius: 100,
	},
	nomePsicologo: {
		fontFamily: 'Signika-Medium',
		fontSize: 14,
		marginLeft: wp('3%'),
	},
	tresPontos: {
		width: 20,
		height: 20,
	},
});
