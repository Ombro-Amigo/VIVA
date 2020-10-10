import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Botao from '../../components/Botao'
import Calendario from '../../components/Calendario'
import Fundo from '../../components/Fundo'
import TipoConsultas from "../../components/TipoConsultas"


export default function Agendamento1() {
   return (
      <ScrollView>
         <Fundo>
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
               <Botao
                  style={styles.buttonProximo}
                  title={"Próximo"}
               />
            </View>
         </Fundo>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
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
   },
})