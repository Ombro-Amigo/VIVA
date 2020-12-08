import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	btnSend: {
		alignSelf: 'center',
		marginRight: wp('4%'),

		// IOS
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		// ANDROID
		elevation: 10,
	},
	icon: {
		width: 20,
		height: 20,
		aspectRatio: 1,
	},
});

export default styles;
