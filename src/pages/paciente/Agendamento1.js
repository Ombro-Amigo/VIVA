import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Calendario from '../../components/Calendario'
import TipoConsultas from "../../components/TipoConsultas"


export default function Agendamento1() {
   return (
      <ScrollView style={styles.scrollView}>
         <View style={styles.container}>
            <View style={styles.containerAgendeConsulta}>
               <Text style={styles.txtAgendeConsulta}>Agende sua Consulta</Text>
            </View>

            <View style={styles.escolhaTipoConsulta}>
               <Text style={styles.titleEscolha}>Escolha o tipo de consulta:</Text>
               <TipoConsultas/>
            </View>

            <View style={styles.escolhaDiaConsulta}>
               <Text style={styles.titleEscolha}>Escolha um dia:</Text>
               <Calendario/>
            </View>
            <View style={styles.areaProximo}>
               <TouchableOpacity style={styles.buttonProximo}>
                  <Text style={styles.txtProximo}>Próximo</Text>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
      
   )
}

const styles = StyleSheet.create({
   scrollView: {
      backgroundColor: "#6EB4E7",   
   },
   container: {
      flex: 1,
      padding: 15,
   },
   txtAgendeConsulta: {
      color: "#186794",
      marginTop: hp("1%"),
      fontWeight: "bold",
      fontSize: wp('7%'),
      textAlign: "center",
   },
   escolhaTipoConsulta: {
      marginTop: hp("3.5%")
   },
   titleEscolha: {
      color: "#FFF",
      fontSize: wp("5.2%"),
      fontWeight: "bold"
   },
   escolhaDiaConsulta: {
      marginTop: hp("3%")
   },
   buttonProximo: {
      backgroundColor: "#34C5A2",
      alignItems: "center",
      marginTop: hp("2.5%"),
      paddingVertical: hp("2.5%"),
      borderRadius: 15,

      // IOS
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: hp("1%"),
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      // ANDROID
      elevation: 4,
   },
   txtProximo: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: wp("4.8%")
   },
})