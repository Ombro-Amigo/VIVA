import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen"
import Fundo from '../../components/Fundo'
import ListaHorarios from '../../components/ListaHorarios'
import ListaPsicologo from '../../components/ListaPsicologos'
import Botao from '../../components/Botao'

export default function Agendamento2({ navigation }) {
   return (
      <Fundo>
         <View style={styles.areaEscolhaPsicologo}>
            <Text style={styles.txtEscolhaPsicologo}>Escolha um dos psicólogos disponíveis:</Text>
            <ListaPsicologo/>
         </View>
         <View style={styles.areaEscolhaDiaConsulta}>
            <Text style={styles.txtEscolhaDiaConsulta}>Esses são os dias de disponiblidade do psicólogo escolhido:</Text>
            <ListaHorarios/>
         </View>
         <Botao
            style={styles.buttonFinalizarAgendamento}
            title={"Finalizar Agendamento"}
            onPress={() => navigation.navigate('HomePaciente')}
         />
      </Fundo>
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
      fontWeight: "bold",
   },
   txtEscolhaDiaConsulta: {
      color: "#FFF",
      marginTop: hp("3%"),
      fontSize: wp("5.2%"),
      fontWeight: "bold",
   },
   buttonFinalizarAgendamento: {
      alignItems: "center",
      marginTop: hp("4%"),
      paddingVertical: hp("2.5%"),
   }
})
