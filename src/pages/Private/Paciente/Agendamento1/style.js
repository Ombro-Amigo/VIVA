import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#6EB4E7',
	},
	txtAgendeConsulta: {
		color: '#186794',
		marginTop: hp('1%'),
		fontFamily: 'Signika-Bold',
		fontSize: 25,
		textAlign: 'center',
	},
	escolhaTipoConsulta: {
		marginTop: hp('3.5%'),
	},
	titleEscolha: {
		color: '#FFF',
		fontFamily: 'Signika-Bold',
		fontSize: 18,
	},
	escolhaDiaConsulta: {
		marginTop: hp('3.5%'),
	},
	buttonProximo: {
		backgroundColor: '#34C5A2',
		alignItems: 'center',
		marginTop: hp('2.5%'),
		paddingVertical: hp('2.5%'),
	},
});

export default styles;
