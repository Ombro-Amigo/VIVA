import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Fundo(props) {
   const { children } = props;
   return (
      <View style={styles.container}>
         {children}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#6EB4E7",
      padding: 15,
   },
})
