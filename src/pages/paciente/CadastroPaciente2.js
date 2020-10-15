import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Entrada from '../../components/Entrada'
import Fundo from '../../components/Fundo'
import CaixaSelecao from '../../components/CaixaSelecao'
import Botao from '../../components/Botao'
import { cpfMask } from '../../utils/cpfMask'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput } from 'react-native-paper'

export default function CadastroPaciente2() {
   const [cpf, setCpf] = useState('')
   const [senha, setSenha] = useState('')
   const [confirmacaoSenha, setConfirmacaoSenha] = useState('')
   const [checkTermos, setCheckedTermos] = useState('')
   const [checkPolitas, setCheckedPoliticas] = useState('')
   const [hidePassword, setHidePassword] = useState(true)
   const [hidePasswordTwo, setHidePasswordTwo] = useState(true)
   

   return (
      <ScrollView style={styles.container}>
         <Fundo>
            <View style={styles.areaTitulo}>
               <Text style={styles.titulo}>Quase lá</Text>
            </View>

            <View style={styles.form}>
               <View style={styles.input}>
                  <Entrada
                     placeholder="CPF"
                     value={cpf}
                     onChangeText={Value => {setCpf(cpfMask(Value))}}
                     obrigatorio
                     tipoTeclado={"number-pad"}
                     max={14}
                  />
               </View>

               <View style={styles.input}>
                  <Entrada
                     placeholder="Senha"
                     value={senha}
                     onChangeText={Value => {setSenha(Value)}}
                     onPress={() => setHidePassword(!hidePassword)}
                     obrigatorio
                     tipoTexto={"password"}
                     secureTextEntry={hidePassword}
                  />
               </View>

               <View style={styles.input}>
                  <Entrada
                     placeholder="Confirme sua senha"
                     value={confirmacaoSenha}
                     onChangeText={Value => {setConfirmacaoSenha(Value)}}
                     onPress={() => {setHidePasswordTwo(!hidePasswordTwo)}}
                     obrigatorio
                     tipoTexto={"password"}
                     secureTextEntry={hidePasswordTwo}
                     msgError="As senha não são correspondentes."
                     msgSucesso="As senhas correspondem."
                     senha={senha}
                     confirmacaoSenha={confirmacaoSenha}
                     verificaSenha
                  />
               </View>
               
               <View style={styles.confirmacoesLeitura}>
                  <View style={styles.confirmacaoContainer}>
                     <CaixaSelecao
                        status={checkPolitas ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedPoliticas(!checkPolitas)}
                        color={"#FFF"}
                     />
                     <View style={styles.areaTxt}>
                        <Text style={styles.txtSelecao}>Li e concordo com os <Text style={styles.txtSublinhado}>Termos de Uso.</Text></Text>
                        
                     </View>
                  </View>
                  
                  <View style={styles.confirmacaoContainer}>
                     <CaixaSelecao
                        status={checkTermos ? 'checked' : 'unchecked'}
                        onPress={() => setCheckedTermos(!checkTermos)}
                        color={"#FFF"}
                     />
                     <View style={styles.areaTxt}>
                        <Text style={styles.txtSelecao}>Li e concordo com as <Text style={styles.txtSublinhado}>Políticas de Privacidade.</Text></Text>
                     </View>
                  </View>

               </View>
               
               <View>
                  <Botao
                     style={styles.btn}
                     title="Concluir Cadastrado"
                  />
               </View>

            </View>
         </Fundo>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#6EB4E7",
   },
   titulo: {
      color: "#186794",
      marginTop: hp("4.5%"),
      marginBottom: hp("2%"),
      fontWeight: "bold",
      fontSize: wp("7%"),
      alignSelf: "center",
   },
   input: {
      marginTop: hp("7%"),
   },
   confirmacoesLeitura: {
      marginTop: hp("5%"),
   },
   confirmacaoContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
   },
   areaTxt: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
   },
   txtSublinhado: {
      textDecorationLine: "underline"
   },
   txtSelecao: {
      alignSelf: "center",
      fontSize: wp("4%"),
      fontWeight: "bold",
   },
   btn: {
      paddingVertical: hp("2.5%"),
      paddingHorizontal: wp("2%"),
      marginTop: hp("3%"),
   }
})

