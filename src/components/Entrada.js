import React from 'react'
import { StyleSheet, View, Image, TextInput } from 'react-native'

export default function Entrada(props) {
   const { icon, placeholder, value, onChangeText, secureTextEntry } = props;

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

   return (
      <View style={styles.container}>
         {renderIcon()}
         <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry ? true : false}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      // justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 5,
      borderBottomColor: '#f00',
   },
   icon: {
      width: 25,
      height: 25,
      aspectRatio: 1,
      // position: 'absolute',
   },
   input: {
      flex: 1,
      fontSize: 18,
   },
})
