import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Calendario from '../../components/Calendario'
import TipoConsultas from "../../components/TipoConsultas"


export default function Agendamento1() {
   return (
      <View style={styles.container}>
         <View style={styles.containerAgendeConsulta}>
            <Text style={styles.txtAgendeConsulta}>Agende sua Consulta</Text>
         </View>

         <View style={styles.escolhaTipoConsulta}>
            <Text style={styles.txtTipoConsulta}>Escolha o tipo de consulta:</Text>
            <TipoConsultas/>
         </View>

         <View style={styles.escolhaDiaConsulta}>
            <Text style={styles.txtescolhaDiaConsulta}>Escolha um dia:</Text>
            <Calendario/>
         </View>

      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#6EB4E7",
      padding: 20,
   },
   txtAgendeConsulta: {
      color: "#186794",
      fontWeight: "bold",
      fontSize: wp('8%'),
      textAlign: "center",
   },
   escolhaTipoConsulta: {
      marginTop: hp("3%")
   },
   txtTipoConsulta: {
      color: "#FFF",
      fontSize: hp("2.8%"),
      fontWeight: "bold"
   },
   escolhaDiaConsulta: {
      marginTop: hp("3%")
   },
   txtescolhaDiaConsulta: {
      color: "#FFF",
      fontSize: hp("2.8%"),
      fontWeight: "bold"
   }
})