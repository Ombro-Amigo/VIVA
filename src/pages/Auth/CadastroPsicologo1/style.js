import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#6EB4E7',
	},
	titulo: {
		color: '#186794',
		marginTop: hp('4.5%'),
		marginBottom: hp('2%'),
		fontFamily: 'Signika-Bold',
		fontSize: 26,
		alignSelf: 'center',
	},
	input: {
		marginTop: hp('4%'),
	},
	txtSelecioneGenero: {
		color: '#FFF',
		fontFamily: 'Signika-Bold',
		fontSize: 18,
	},
	btn: {
		paddingVertical: hp('2.5%'),
		paddingHorizontal: wp('2%'),
		marginTop: hp('3%'),
	},
});

export default styles;
