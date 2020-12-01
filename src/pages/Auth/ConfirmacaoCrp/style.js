import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#6EB4E7',
	},
	title: {
		color: '#186794',
		marginTop: hp('3%'),
		fontSize: wp('8%'),
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	subTitle: {
		color: '#FFF',
		marginTop: hp('5%'),
		paddingHorizontal: wp('2%'),
		fontSize: wp('5%'),
		fontWeight: 'bold',
		textAlign: 'center',
	},
	exibeCrp: {
		color: '#186794',
		marginTop: hp('6%'),
		fontSize: wp('6.1%'),
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	exibeSituacaoValidacao: {
		color: '#000',
		marginTop: hp('1%'),
		fontSize: wp('5%'),
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	containerMensagem: {
		backgroundColor: '#FFF',
		borderRadius: 15,
		height: hp('25%'),
		marginVertical: hp('5%'),
		paddingHorizontal: wp('8%'),
		justifyContent: 'center',
		alignItems: 'center',
	},
	txtAguarde: {
		fontSize: wp('5%'),
		fontWeight: 'bold',
	},
	btn: {
		paddingVertical: hp('2.5%'),
	},
});

export default styles;
