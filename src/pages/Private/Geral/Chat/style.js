import { StyleSheet } from 'react-native';
import { heightPercentageToDP  as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
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
