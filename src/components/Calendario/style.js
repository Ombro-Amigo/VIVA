import { StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: hp('2%'),
		backgroundColor: '#FFF',
		borderRadius: 10,
		borderStyle: 'solid',
		borderWidth: wp('0.8%'),
		borderColor: '#000',
	},
	msgError: {
		color: '#f00',
	},
});

export default styles;
