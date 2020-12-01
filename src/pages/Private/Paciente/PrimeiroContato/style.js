import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	mensagemBoasVindas: {
		color: '#186794',
		textAlign: 'center',
		fontSize: wp('9%'),
		fontWeight: 'bold',
		marginTop: hp('2%'),
	},
	explicacao: {
		backgroundColor: '#FFF',
		borderRadius: 15,
		marginVertical: hp('10%'),
		padding: wp('5%'),
	},
	mensagemExplicacao: {
		color: '#6EB4E7',
		fontSize: wp('6%'),
		fontWeight: 'bold',
		textAlign: 'center',
	},
	btn: {
		paddingVertical: hp('2.5%'),
		paddingHorizontal: wp('2%'),
	},
});

export default styles;
