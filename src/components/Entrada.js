import React from 'react'
import { StyleSheet, View, Image, TextInput, Text } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function Entrada(props) {
   const { icon, placeholder, value, onChangeText, secureTextEntry, obrigatorio, tipoTeclado, tipoDado } = props;

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

   return (
      <View style={styles.container}>
         {renderIcon()}
         {renderObrigatorio(value)}
         <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry ? true : false}
            keyboardType={tipoTeclado ? tipoTeclado : "default"}
         />
         
      </View>
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
      paddingHorizontal: wp("4%"),
   },
   obrigatorio: {
      color: "red",
      fontSize: wp("4.5%"),
      alignSelf: "flex-start",
   },
})
