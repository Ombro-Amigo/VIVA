import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: hp("0.3%"),
      borderBottomColor: '#FFF',
   },
   icon: {
      width: wp("6.5%"),
      height: hp("6.5%"),
      aspectRatio: 1,
      marginHorizontal: wp("4%"),
      marginVertical: hp("1%"),
      opacity: 0.7,
   },
   input: {
      flex: 1,
      fontSize: hp("2.6%"),
      paddingHorizontal: wp("5%"),
      color: '#000',
   },
   areaObrigatorio: {
      width: wp("2%"),
   },
   obrigatorio: {
      color: "red",
      fontSize: wp("4.5%"),
      alignSelf: "flex-start",
   },
   eyeIcon: {
      height: 22,
      width: 22,
      marginRight: wp("3%"),
      marginBottom: hp("1%")
   },
   areaConfirmacaoSenha: {
      height: hp("2%")
   },
   senhaCorreta: {
      color: "green",
      alignSelf: "flex-end",
      fontSize: wp("3.3%"),
   },
   senhaErrada: {
      color: "red",
      alignSelf: "flex-end",
      fontSize: wp("3.3%"),
   },
})
