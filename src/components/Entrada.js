import React, { useState} from 'react'
import { StyleSheet, View, Image, TextInput, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Entrada(props) {
   const { 
      icon,
      placeholder, 
      value, 
      onChangeText,
      secureTextEntry, 
      obrigatorio, 
      tipoTeclado, 
      desabilitado,
      max,
      tipoTexto,
      onPress,
      verificaCondicao,
      condicao,
      msgError,
      msgSucesso,
   } = props;

   const eye = require('../../assets/icon/eye-regular.png')
   const eyeSlash = require('../../assets/icon/eye-slash.png')

   const [imgOlho, setimgOlho] = useState(eye)

   function renderIcon() {
      if(icon) {
         return (
            <Image
               source={icon}
               style={styles.icon}
            />
         );
      }
   }

   function renderObrigatorio(value){
      if(obrigatorio && !value){
         return (
            <Text style={styles.obrigatorio}>*</Text>
         )
      }
   }

   function renderMsg(){
      if(verificaCondicao){
         if(condicao && msgSucesso){
               return <Text style={styles.senhaCorreta}>{msgSucesso}</Text>
         }else if(!condicao && msgError){
               return (
                  <Text style={styles.senhaErrada}>{msgError}</Text>
               )
         } 
      }
   }

   function renderEye(){
      if(tipoTexto === "password"){
         return (
            <TouchableOpacity onPress={onPress}>
               <Image
                  style={styles.eyeIcon}
                  source={secureTextEntry ? eyeSlash : eye}
               />
            </TouchableOpacity>
         )
      }
   }

   return (
    <>
        <View style={styles.container}>   
            {renderIcon()}
            <View style={styles.areaObrigatorio}>
                {renderObrigatorio(value)}
            </View> 
            <TextInput
                style={[styles.input]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry ? true : false}
                keyboardType={tipoTeclado ? tipoTeclado : "default"}
                editable={desabilitado ? false : true}
                maxLength={max ? max : null}
                textContentType={tipoTexto ? tipoTexto : null}
            />
            {renderEye()}
            
        </View>
        <View style={styles.areaConfirmacaoSenha}>
            {renderMsg()}
        </View>
    </>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: hp("0.3%"),
      borderBottomColor: '#FFF',
   },
   icon: {
      width: wp("6.5%"),
      height: hp("6.5%"),
      aspectRatio: 1,
      marginHorizontal: wp("4%"),
      marginVertical: hp("1%"),
      opacity: 0.7,
   },
   input: {
      flex: 1,
      fontSize: hp("2.6%"),
      paddingHorizontal: wp("5%"),
      color: '#000',
   },
   areaObrigatorio: {
      width: wp("2%"),
   },
   obrigatorio: {
      color: "red",
      fontSize: wp("4.5%"),
      alignSelf: "flex-start",
   },
   eyeIcon: {
      height: 22,
      width: 22,
      marginRight: wp("3%"),
      marginBottom: hp("1%")
   },
   areaConfirmacaoSenha: {
      height: hp("2%")
   },
   senhaCorreta: {
      color: "green",
      alignSelf: "flex-end",
      fontSize: wp("3.3%"),
   },
   senhaErrada: {
      color: "red",
      alignSelf: "flex-end",
      fontSize: wp("3.3%"),
   },
})
