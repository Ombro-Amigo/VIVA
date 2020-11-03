import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

export default function CaixaSelecao(props) {
   const { status, onPress, uncheckedColor, color, title } = props
   return (
      <View style={styles.container}>
         <Checkbox.Android
            status={status}
            onPress={onPress}
            uncheckedColor={uncheckedColor ? uncheckedColor : '#ccc'}
            color={color ? color : '#0f0'}
         />
         <Text>{title}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
   }
})
