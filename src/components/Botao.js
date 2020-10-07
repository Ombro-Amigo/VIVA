import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Botao(props) {
	const { title, style, imgStyle, corFundo, corTexto, img } = props;
	if(!img){
		return (
			<View>
				<TouchableOpacity style={[
					{
						backgroundColor: !corFundo ? '#34C5A2' : corFundo
					},
					styles.botao,
					style
				]}>
					<Text style={[
						{
							color: !corTexto ? '#FFF' : corTexto
						},
						styles.txtBotao
					]}>
						{title}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}else{
		return (
			<View>
				<TouchableOpacity style={[
					{backgroundColor: !corFundo ? '#34C5A2' : corFundo},
					styles.botao,
					styles.botaoComIcone,
					style
				]}>
					<Text style={[
						{
							color: !corTexto ? '#FFF' : corTexto,
							marginRight: 30
						},
						styles.txtBotao,
					]}>
						{title}
					</Text>
					<Image
						style={imgStyle}
						source={img}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	botao: {
		borderRadius: 15,

		// IOS
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		// ANDROID
		elevation: 4,
	},
	txtBotao: {
		fontWeight: 'bold',
		fontSize: hp('2.5%'),
	},

	// Caso o botão tenha algum icone
	botaoComIcone: {
		flexDirection: 'row',
		alignItems: 'center',
	}
})
