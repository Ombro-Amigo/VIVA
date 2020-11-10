import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'
import Botao from '../../components/Botao'
import RespostaValidacaoCrp from '../../components/RespostaValidacaoCrp'
import StatesContext from '../../contexts/states'


export default function ConfirmacaoCrp({navigation}) {

   const [validationComplete, setvalidationComplete] = useState(false)
   const {validated} = useContext(StatesContext)

   return (
      <ScrollView style={styles.container}>
         <Fundo>
            <View style={styles.titleContainer}>
               <Text style={styles.title}>Quase lá</Text>
            </View>

            <View style={styles.subTitleContainer}>
               <Text style={styles.subTitle}>Agora precisamos que aguarde
                     enquanto o processo de validação
                     do seu CRP é efetuado.
               </Text>
            </View>
               
            <View style={styles.areaSituacaoCrp}>
               <Text style={styles.exibeCrp}>Seu CRP: XX/XXXXXX</Text>
               <Text style={styles.exibeSituacaoValidacao}>
                  Situação da validação:
                  <Text style={{color: !validationComplete ? "#FF7A00" : "#FFF"}}> 
                     {!validationComplete ? " Em andamento" : " Concluída" }
                  </Text>
               </Text>
            </View>

            <View style={styles.containerMensagem}>
               {validationComplete ?
                  <RespostaValidacaoCrp validate={validated} validationComplete={validationComplete}/>
                  :
                  <Text style={styles.txtAguarde}>Aguarde o processo de validação</Text>
               }
               
            </View>

            <Botao 
               corFundo={validationComplete ? "#34C5A2" : "#C3C3C3"}
               style={styles.btn}
               title={validated ? "Concluir" : "Voltar para a tela inicial"}
               desabilitado={!validated}
               onPress={() => navigation.navigate("LoginPsicologo")}
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
      color: "#FFF",
      marginTop: hp("5%"),
      paddingHorizontal: wp("2%"),
      fontSize: wp("5%"),
      fontWeight: "bold",
      textAlign: "center",
   },
   exibeCrp: {
      color: "#186794",
      marginTop: hp("6%"),
      fontSize: wp("6.1%"),
      fontWeight: "bold",
      alignSelf: "center"
   },
   exibeSituacaoValidacao: {
      color: "#000",
      marginTop: hp("1%"),
      fontSize: wp("5%"),
      fontWeight: "bold",
      alignSelf: "center",
   },
   containerMensagem: {
      backgroundColor: "#FFF",
      borderRadius: 15,
      height: hp("25%"),
      marginVertical: hp("5%"),
      paddingHorizontal: wp("8%"),
      justifyContent: "center",
      alignItems: "center"
   },
   txtAguarde:{
      fontSize: wp("5%"),
      fontWeight: "bold",
   },
   btn: {
      paddingVertical: hp("2.5%"),
   }
})