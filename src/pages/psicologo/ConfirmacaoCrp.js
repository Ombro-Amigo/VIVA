import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Fundo from '../../components/Fundo'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Botao from '../../components/Botao'

export default function ConfirmacaoCrp() {
   return (
      <Fundo>
         <View>
            <Text style={[styles.title, styles.txtCor]}>Quase lá!</Text>
            <Text>Seus dados foram registrados!</Text>
         </View>
         <Botao title='Concluir' style={styles.btn}/>
      </Fundo>
      
   )
}

const styles = StyleSheet.create({
   title: {
      fontWeight: 'bold',
      fontSize: wp('15%'),
      textAlign: 'center',
   },
   txtCor: {
      color: '#186794',
   },
   btn: {
      paddingHorizontal: wp('5%'),
      paddingVertical: hp('5%'),
      
   }
})