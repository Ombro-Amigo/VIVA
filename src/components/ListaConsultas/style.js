import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		height: hp('52%'),
		borderRadius: 10,
		borderStyle: 'solid',
		paddingHorizontal: wp('4%'),
		paddingVertical: hp('1%'),
	},
	containerMsg: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	msgVazia: {
		color: '#186794',
		fontWeight: 'bold',
		fontSize: wp('5%'),
		textAlign: 'center',
	},
});

export default styles;
