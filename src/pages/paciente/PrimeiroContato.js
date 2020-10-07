import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function PrimeiroContato() {
   return (
      <View style={styles.container}>
         <View styles={styles.boasVindas}>
            <Text style={styles.mensagemBoasVindas}>Seja bem-vindo</Text>
         </View>
         <View style={styles.explicacao}>
            <Text style={styles.mensagemExplicacao}>Como esta é sua primeira vez aqui, escolha como deseja continuar:</Text>
         </View>
         <View style={styles.opcoes}>
            <TouchableOpacity style={styles.buttonAtendimento}>
               <Text style={styles.txtAtendimento}>SEGUIR PARA UM ATENDIMENTO COM UM PSICÓLOGO</Text>
            </TouchableOpacity>
            <Text style={styles.txtMeio}>OU</Text>
            <TouchableOpacity style={styles.buttonTriagem}>
               <Text style={styles.txtTriagem}>SEGUIR PARA O PROCESSO DE TRIAGEM</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#6EB4E7",
      padding: 15,
   },
   mensagemBoasVindas: {
      color: "#186794",
      textAlign: "center",
      fontSize: hp("6%"),
      fontWeight: "bold",
      marginTop: hp('2%'),
   },
   mensagemExplicacao: {
      color: "#FFF",
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: hp('10%'),
   },
   opcoes: {
      // flex: 1
   },
   buttonAtendimento: {
      height: hp('9%'),
      borderStyle: "solid",
      borderColor: "#565656",
      borderWidth: 3,
      borderRadius: 10,
      padding: 5,
      justifyContent: "center",
   },
   txtAtendimento: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
   },
   txtMeio: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: hp('1%'),
   },
   buttonTriagem: {
      height: hp('9%'),
      borderStyle: "solid",
      borderColor: "#565656",
      borderWidth: 3,
      borderRadius: 10,
      padding: 5,
      justifyContent: "center"
   },
   txtTriagem: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
   }
})