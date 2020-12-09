import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	scrollToBottomContainer: {
		backgroundColor: '#939597',
	},
	scrollToBottomIcon: {
		width: 20,
		height: 20,
		aspectRatio: 1,
	},
	inputMessageArea: {
		backgroundColor: '#2192E4',
		borderRadius: 15,
		marginHorizontal: wp('2%'),
		marginBottom: hp('0.8%'),
	},
	btnSend: {
		alignSelf: 'center',
		marginRight: wp('4%'),
	},
	icon: {
		width: 20,
		height: 20,
		aspectRatio: 1,
	},
});

export default styles;
