import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
import ListaPsicologo from '../../components/ListaPsicologos'

export default function Agendamento2() {
   return (
      <View style={styles.container}>
         <View style={styles.areaEscolhaPsicologo}>
            <Text style={styles.txtEscolhaPsicologo}>Escolha um dos psicólogos disponíveis:</Text>
            <ListaPsicologo/>
         </View>
         <View style={styles.areaEscolhaDiaConsulta}>
            <Text style={styles.txtEscolhaDiaConsulta}>Esses são os dias de disponiblidade do psicólogo escolhido:</Text>
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
   txtEscolhaPsicologo: {
      color: "#FFF",
      marginTop: hp("2%"),
      fontSize: wp("5.2%"),
      fontWeight: "bold"
   },
   txtEscolhaDiaConsulta: {
      color: "#FFF",
      marginTop: hp("3%"),
      fontSize: wp("5.2%"),
      fontWeight: "bold"
   }
})
