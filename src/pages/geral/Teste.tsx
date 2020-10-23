import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Botao from '../../components/Botao';
import AuthContext from '../../contexts/auth';

export default function Teste() {
   const {signed, signIn} = useContext(AuthContext);

   console.log(signed);

   function handleSignIn() {
      signIn();
   }

   return (
      <View>
         <Botao title="Entrar" style={styles.btnLogin} onPress={handleSignIn}/>
      </View>
   )
}

const styles = StyleSheet.create({
   btnLogin: {
      marginTop: hp("3%"),
		paddingHorizontal: wp("1.8%"),
      paddingVertical: hp("2%"), 
	},
})
