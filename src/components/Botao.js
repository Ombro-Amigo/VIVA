import React from 'react';
<<<<<<< Updated upstream
import { Image, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Botao(props) {
	const { title, style, imgStyle, corFundo, corTexto, img, 
			highlight, activeOpcatity, underlayColor, onPress, desabilitado, direction } = props;
=======
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Botao(props) {
	const {
		title,
		style,
		imgStyle,
		corFundo,
		corTexto,
		img,
		onPress,
		desabilitado,
	} = props;
>>>>>>> Stashed changes

	function renderIcon() {
		if (img) {
			return <Image style={imgStyle} source={img} />;
		}
	}

<<<<<<< Updated upstream
	const conteudoBotao = () =>{
		return(
			<View style={[
					img ? styles.botaoComIcone : null,
					
				], {flexDirection: direction}}
			>
				<Text style={[
						{
							color: !corTexto ? '#FFF' : corTexto,
						},
						styles.txtBotao
=======
	return (
		<View>
			<TouchableOpacity
				style={[
					{
						backgroundColor: !corFundo ? '#34C5A2' : corFundo,
					},
					styles.botao,
					img ? styles.botaoComIcone : null,
					style,
				]}
				onPress={onPress}
				disabled={desabilitado}
			>
				<Text
					style={[
						{
							color: !corTexto ? '#FFF' : corTexto,
							marginRight: img ? wp('5%') : null,
						},
						styles.txtBotao,
>>>>>>> Stashed changes
					]}
				>
					{title}
				</Text>
<<<<<<< Updated upstream
				{ renderIcon() }
			</View>
		)
	}
	

	return (
		<View>
			{highlight ?
				<TouchableHighlight 
					onPress={onPress} 
					disabled={desabilitado}
					activeOpacity={activeOpcatity}
					underlayColor={underlayColor}
					style={[
						styles.botao,
						{
							backgroundColor: !corFundo && corFundo !== null ? "#34C5A2" : corFundo
						},
						style
					]}
				>	
					{conteudoBotao()}
				</TouchableHighlight>
				:
				<TouchableOpacity 
					onPress={onPress} 
					disabled={desabilitado}
					style={[
						styles.botao,
						styles.sombra,
						{
							backgroundColor: !corFundo ? "#34C5A2" : corFundo
						},
						style
					]}
				>	
					{conteudoBotao()}
				</TouchableOpacity>
			}
			
=======
				{renderIcon()}
			</TouchableOpacity>
>>>>>>> Stashed changes
		</View>
	);
}

const styles = StyleSheet.create({
	botao: {
		borderRadius: 15,
	},
	sombra: {
		// IOS
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		// ANDROID
		elevation: 4,
<<<<<<< Updated upstream
=======
		justifyContent: 'space-around',
>>>>>>> Stashed changes
	},
	txtBotao: {
		fontWeight: 'bold',
		fontSize: wp('4.5%'),
		alignSelf: 'center',
	},

	// Caso o botão tenha algum icone
	botaoComIcone: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
