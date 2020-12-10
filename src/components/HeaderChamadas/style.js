import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#34C5A2',
		height: hp('10%'),
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	title: {
		color: '#FFF',
		fontSize: 18,
		fontFamily: 'Signika-Bold',
	},
	areaOpcoes: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	divider: {
		backgroundColor: '#000',
		width: 2,
		height: hp('5%'),
		marginHorizontal: wp('3%'),
		transform: [{ rotate: '180deg' }],
	},
	icon: {
		width: 25,
		height: 25,
		aspectRatio: 1,
	},
});

export default styles;
