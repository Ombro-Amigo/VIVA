import React, {useState} from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'
import Botao from '../../components/Botao'
import Entrada from '../../components/Entrada'
import EscolhaGenero from '../../components/EscolhaGenero'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
   

export default function CadastroPsicologo1({ navigation }) {

   const [nomeUser, setNomeUser] = useState('');
   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [email, setEmail] = useState('')
   const [dataNasc, setDataNasc] = useState('');
   const [show, setShow] = useState(false);
   const [genero, setGenero] = useState('')

   return (
      <ScrollView style={styles.container}>
         <Fundo>
            <View style={styles.areaTitulo}>
               <Text style={styles.titulo}>Crie sua conta</Text>
            </View>

            <View style={styles.form}>
               <View style={styles.input}>
                  <Entrada
                     placeholder="Nome de usuário"
                     value={nomeUser}
                     onChangeText={Value => {setNomeUser(Value)}}
                     tipoTexto={"username"}
                     obrigatorio
                  />
               </View>
               
               <View style={styles.input}>
                  <Entrada
                     placeholder="Nome"
                     value={nome}
                     onChangeText={Value => {setNome(Value)}}
                     tipoTexto={"name"}
                     obrigatorio
                  />
               </View>

               <View style={styles.input}>
                  <Entrada
                     placeholder="Sobrenome"
                     value={sobrenome}
                     onChangeText={Value => {setSobrenome(Value)}}
                     obrigatorio
                  />
               </View>

               <View style={styles.input}>
                  <Entrada
                     placeholder="Email"
                     value={email}
                     onChangeText={Value => {setEmail(Value)}}
                     tipoTeclado={"email-address"}
                     tipoTexto={"emailAddress"}
                     obrigatorio
                  />
               </View>

               <TouchableWithoutFeedback onPress={() => setShow(true)}>
                  <View style={styles.input}>
                     <Entrada
                        placeholder="Data de Nascimento"
                        value={dataNasc}
                        onChangeText={Value => {setDataNasc(Value)}}
                        obrigatorio
                        desabilitado
                     />
                  </View>
               </TouchableWithoutFeedback>
               
               <View style={styles.input}>
                  <Text style={styles.txtSelecioneGenero}>Selecione seu gênero: </Text>
                  <EscolhaGenero onValueChange={value => setGenero(value)} value={genero}/>
               </View>

               <View>
                  <Botao
                     style={styles.btn}
                     title="Próximo"
                     onPress={() => navigation.navigate('CadastroPsicologo2')}
                  />
               </View>

               <DateTimePicker
                  isVisible={show}
                  mode='date'
                  onConfirm={(date) => {
                     setShow(false);
                     setDataNasc(moment(date).format('DD/MM/YYYY'))
                  }}
                  onCancel={() => {
                     setShow(false);
                     setDataNasc(dataNasc);
                  }}
                  maximumDate={new Date()}
               />

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
      marginTop: hp("4.5%")
   },
   txtSelecioneGenero: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: wp("4.6%"),
   },
   btn: {
      paddingVertical: hp("2.5%"),
      paddingHorizontal: wp("2%"),
      marginTop: hp("3%")
   }
})