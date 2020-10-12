import React, {useState} from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Fundo from '../../components/Fundo'
import Botao from '../../components/Botao'
import Entrada from '../../components/Entrada'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'

export default function CadastroPaciente1() {
   const [nomeUser, setNomeUser] = useState('');
   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [dataNasc, setDataNasc] = useState('');
   const [show, setShow] = useState(false);

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
                     obrigatorio
                  />
               </View>
               
               <View style={styles.input}>
                  <Entrada
                     placeholder="Nome"
                     value={nome}
                     onChangeText={Value => {setNome(Value)}}
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

               <TouchableWithoutFeedback onPress={() => setShow(true)}>
                  <View style={styles.input}>
                     <Entrada
                        placeholder="Data de Nascimento"
                        value={dataNasc}
                        onChangeText={Value => {setDataNasc(Value)}}
                        tipoTeclado={"number-pad"}
                        tipoDado={'calendarEvent'}
                        obrigatorio
                        desabilitado
                     />
                  </View>
               </TouchableWithoutFeedback>

               <View style={styles.input}>
                  <Entrada
                     placeholder="Nome de usuário"
                     value={nomeUser}
                     onChangeText={Value => {setNomeUser(Value)}}
                     obrigatorio
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
      marginTop: hp("5%"),
      marginBottom: hp("2%"),
      fontWeight: "bold",
      fontSize: wp("7%"),
      alignSelf: "center",
   },
   input: {
      marginTop: hp("4.5%")
   }
})