import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'
import Botao from '../../components/Botao'

export default function PrimeiroContato() {
   return (
      <Fundo>
         <View styles={styles.boasVindas}>
            <Text style={styles.mensagemBoasVindas}>Seja bem-vindo</Text>
         </View>
         <View style={styles.explicacao}>
            <Text style={styles.mensagemExplicacao}>
               Como esta é a sua primeira vez aqui, precisamos colher algumas
               informações importantes para seus futuros atendimentos em nosso
               aplicativo. Clique no botão para seguir para a triagem. 
            </Text>
         </View>
         <Botao
            title="Seguir para a triagem"
            style={styles.btn}
         />
      </Fundo>
   )
}

const styles = StyleSheet.create({
   mensagemBoasVindas: {
      color: "#186794",
      textAlign: "center",
      fontSize: wp("9%"),
      fontWeight: "bold",
      marginTop: hp('2%'),
   },
   explicacao: {
      backgroundColor: "#FFF",
      borderRadius: 15,
      marginVertical: hp("10%"),
      padding: wp("5%")
   },
   mensagemExplicacao: {
      color: "#6EB4E7",
      fontSize: wp("6%"),
      fontWeight: "bold",
      textAlign: "center",
   },
   btn: {
      paddingVertical: hp("2.5%"),
      paddingHorizontal: wp("2%"),
      
   }
})