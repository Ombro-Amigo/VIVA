import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Fundo from '../../components/Fundo'
import Botao from '../../components/Botao'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler'

export default function ConfirmacaoCrp({navigation}) {

   const [validade, setValidade] = useState(true)

   return (
      <ScrollView style={styles.container}>
         <Fundo>
            <View style={styles.titleContainer}>
               <Text style={styles.title}>Quase lá</Text>
               <Text style={styles.subTitle}>Seus dados foram registrados</Text>
            </View>

            <View style={styles.mensagemContainer}>
               <Text style={styles.mensagem}>Agora precisamos que aguarde
                     enquanto o processo de validação
                     do seu CRP é efetuado.
               </Text>
            </View>
               
            <View style={styles.areaSituacaoCrp}>
               <Text style={styles.exibeCrp}>Seu CRP: XX/XXXXXX</Text>
               <Text style={styles.exibeSituacaoValidacao}>
                  Situação da validação:
                  <Text style={styles.status}> Status</Text>
               </Text>
            </View>

            <Botao 
               corFundo={validade ? "#34C5A2" : "#C3C3C3"}
               style={styles.btn}
               title="Concluir"
               desabilitado={!validade}
            />

         </Fundo>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#6EB4E7",
   },
   title: {
      color: "#186794",
      marginTop: hp("3%"),
      fontSize: wp("8%"),
      fontWeight: "bold",
      alignSelf: "center",
   },
   subTitle: {
      color: "#186794",
      marginTop: hp("3%"),
      fontSize: wp("7%"),
      fontWeight: "bold", 
      textAlign: "center"
   },
   mensagem: {
      color: "#FFF",
      marginTop: hp("8%"),
      paddingHorizontal: wp("2%"),
      fontSize: wp("4.7%"),
      fontWeight: "bold",
      textAlign: "justify",
   },
   exibeCrp: {
      color: "#186794",
      marginTop: hp("10%"),
      fontSize: wp("6.1%"),
      fontWeight: "bold",
      alignSelf: "center"
   },
   exibeSituacaoValidacao: {
      color: "#000",
      marginTop: hp("3%"),
      fontSize: wp("5%"),
      fontWeight: "bold",
      alignSelf: "center",
   },
   status: {
      color: "#FF8000",
   },
   btn: {
      marginTop: hp("6%"),
      paddingVertical: hp("2.5%"),
   }
})