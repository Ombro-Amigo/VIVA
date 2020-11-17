import React from 'react';
import {
	Image,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
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
		styleTexto,
		img,
		highlight,
		activeOpcatity,
		underlayColor,
		onPress,
		desabilitado,
		direction,
		loading,
	} = props;

	function renderIcon() {
		if (img) {
			return <Image style={imgStyle} source={img} />;
		}
	}

	const conteudoBotao = () => {
		if (loading) return <ActivityIndicator color="#fff" />;
		return (
			<View
				style={
					([img ? styles.botaoComIcone : null],
					{ flexDirection: direction, alignItems: "center" })
				}
			>
				<Text
					style={[
						{
							color: !corTexto ? '#FFF' : corTexto,
						},
						styles.txtBotao,
						styleTexto,
					]}
				>
					{title}
				</Text>
				{renderIcon()}
			</View>
		);
	};

	return (
		<View>
			{highlight ? (
				<TouchableHighlight
					onPress={onPress}
					disabled={desabilitado}
					activeOpacity={activeOpcatity}
					underlayColor={underlayColor}
					style={[
						styles.botao,
						{
							backgroundColor:
								!corFundo && corFundo !== null ? '#34C5A2' : corFundo,
						},
						style,
					]}
				>
					{conteudoBotao()}
				</TouchableHighlight>
			) : (
				<TouchableOpacity
					onPress={onPress}
					disabled={desabilitado}
					style={[
						styles.botao,
						styles.sombra,
						{
							backgroundColor: !corFundo ? '#34C5A2' : corFundo,
						},
						style,
					]}
				>
					{conteudoBotao()}
				</TouchableOpacity>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	botao: {
		borderRadius: 15,
		justifyContent: "center"
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
	},
	txtBotao: {
		fontWeight: 'bold',
		fontSize: 15,
		alignSelf: 'center',
	},

	// Caso o botão tenha algum icone
	botaoComIcone: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
